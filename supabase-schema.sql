-- Pull Up & Hoop - Supabase Schema
-- Run this in your Supabase SQL editor

-- Courts table
create table courts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  address text not null,
  lat double precision not null,
  lng double precision not null,
  surface_type text default 'asphalt' check (surface_type in ('asphalt', 'concrete', 'hardwood', 'sport-court')),
  game_type text default '5v5' check (game_type in ('5v5', '3v3', '21', 'mixed')),
  skill_level text default 'all' check (skill_level in ('beginner', 'intermediate', 'advanced', 'all')),
  image_url text,
  created_at timestamptz default now()
);

-- Check-ins table
create table check_ins (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  court_id uuid references courts(id) on delete cascade not null,
  checked_in_at timestamptz default now(),
  expires_at timestamptz default (now() + interval '3 hours'),
  is_active boolean default true
);

-- Ratings table
create table ratings (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  court_id uuid references courts(id) on delete cascade not null,
  hoop_quality integer check (hoop_quality between 1 and 5) not null,
  court_condition integer check (court_condition between 1 and 5) not null,
  competition integer check (competition between 1 and 5) not null,
  comment text,
  created_at timestamptz default now()
);

-- Profiles table (extends auth.users)
create table profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text unique,
  avatar_url text,
  created_at timestamptz default now()
);

-- Create indexes
create index idx_check_ins_court on check_ins(court_id);
create index idx_check_ins_active on check_ins(is_active, expires_at);
create index idx_ratings_court on ratings(court_id);

-- Enable RLS
alter table courts enable row level security;
alter table check_ins enable row level security;
alter table ratings enable row level security;
alter table profiles enable row level security;

-- Courts: readable by all, writable by authenticated
create policy "Courts are viewable by everyone" on courts for select using (true);
create policy "Authenticated users can insert courts" on courts for insert with check (auth.role() = 'authenticated');

-- Check-ins: readable by all, writable by owner
create policy "Check-ins are viewable by everyone" on check_ins for select using (true);
create policy "Users can insert own check-ins" on check_ins for insert with check (auth.uid() = user_id);
create policy "Users can update own check-ins" on check_ins for update using (auth.uid() = user_id);

-- Ratings: readable by all, writable by owner
create policy "Ratings are viewable by everyone" on ratings for select using (true);
create policy "Users can insert own ratings" on ratings for insert with check (auth.uid() = user_id);

-- Profiles: readable by all, writable by owner
create policy "Profiles are viewable by everyone" on profiles for select using (true);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username)
  values (new.id, new.raw_user_meta_data->>'username');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- Function to expire old check-ins
create or replace function expire_check_ins()
returns void as $$
begin
  update check_ins set is_active = false where expires_at < now() and is_active = true;
end;
$$ language plpgsql;
