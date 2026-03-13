export interface Court {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  surface_type: 'asphalt' | 'concrete' | 'hardwood' | 'sport-court'
  game_type: '5v5' | '3v3' | '21' | 'mixed'
  skill_level: 'beginner' | 'intermediate' | 'advanced' | 'all'
  image_url?: string
  created_at: string
  active_players?: number
  avg_rating?: number
}

export interface CheckIn {
  id: string
  user_id: string
  court_id: string
  checked_in_at: string
  expires_at: string
  is_active: boolean
}

export interface Rating {
  id: string
  user_id: string
  court_id: string
  hoop_quality: number
  court_condition: number
  competition: number
  comment?: string
  created_at: string
}

export interface Profile {
  id: string
  username?: string
  avatar_url?: string
  created_at: string
}
