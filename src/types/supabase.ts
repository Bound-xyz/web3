export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          created_at: string | null
          updated_at: string | null
          name: string
          description: string | null
          id: string
          logoUri: string | null
        }
        Insert: {
          created_at?: string | null
          updated_at?: string | null
          name: string
          description?: string | null
          id?: string
          logoUri?: string | null
        }
        Update: {
          created_at?: string | null
          updated_at?: string | null
          name?: string
          description?: string | null
          id?: string
          logoUri?: string | null
        }
      }
      project_members: {
        Row: {
          created_at: string | null
          user_id: string
          status: string
          id: string
          updated_at: string
          project_id: string
        }
        Insert: {
          created_at?: string | null
          user_id: string
          status: string
          id?: string
          updated_at?: string
          project_id: string
        }
        Update: {
          created_at?: string | null
          user_id?: string
          status?: string
          id?: string
          updated_at?: string
          project_id?: string
        }
      }
      projects: {
        Row: {
          created_at: string | null
          updated_at: string | null
          name: string
          description: string
          rewards: string[]
          start_date: string
          end_date: string
          issued_company: string
          id: string
          requirements: string[]
          thumbnail_uri: string
          utilities: string[]
        }
        Insert: {
          created_at?: string | null
          updated_at?: string | null
          name: string
          description: string
          rewards: string[]
          start_date: string
          end_date: string
          issued_company: string
          id?: string
          requirements: string[]
          thumbnail_uri: string
          utilities: string[]
        }
        Update: {
          created_at?: string | null
          updated_at?: string | null
          name?: string
          description?: string
          rewards?: string[]
          start_date?: string
          end_date?: string
          issued_company?: string
          id?: string
          requirements?: string[]
          thumbnail_uri?: string
          utilities?: string[]
        }
      }
      users: {
        Row: {
          name: string | null
          wallet_address: string
          updated_at: string | null
          created_at: string | null
          career: string | null
          skills: string[] | null
          id: string
        }
        Insert: {
          name?: string | null
          wallet_address: string
          updated_at?: string | null
          created_at?: string | null
          career?: string | null
          skills?: string[] | null
          id?: string
        }
        Update: {
          name?: string | null
          wallet_address?: string
          updated_at?: string | null
          created_at?: string | null
          career?: string | null
          skills?: string[] | null
          id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
