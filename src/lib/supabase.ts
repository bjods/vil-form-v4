export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      form_sessions: {
        Row: {
          id: string
          status: string
          selected_services: string[] | null
          inside_service_area: boolean | null
          personal_information: Json | null
          responses: Json | null
          upload_file_urls: string[] | null
          upload_link_requested: boolean | null
          upload_link_sent: boolean | null
          upload_link_url: string | null
          upload_link_token: string | null
          upload_webhook_url: string | null
          form_webhook_url: string | null
          created_at: string
          updated_at: string
          ip_address: string | null
        }
        Insert: {
          id?: string
          status: string
          selected_services?: string[] | null
          inside_service_area?: boolean | null
          personal_information?: Json | null
          responses?: Json | null
          upload_file_urls?: string[] | null
          upload_link_requested?: boolean | null
          upload_link_sent?: boolean | null
          upload_link_url?: string | null
          upload_link_token?: string | null
          upload_webhook_url?: string | null
          form_webhook_url?: string | null
          created_at?: string
          updated_at?: string
          ip_address?: string | null
        }
        Update: {
          id?: string
          status?: string
          selected_services?: string[] | null
          inside_service_area?: boolean | null
          personal_information?: Json | null
          responses?: Json | null
          upload_file_urls?: string[] | null
          upload_link_requested?: boolean | null
          upload_link_sent?: boolean | null
          upload_link_url?: string | null
          upload_link_token?: string | null
          upload_webhook_url?: string | null
          form_webhook_url?: string | null
          created_at?: string
          updated_at?: string
          ip_address?: string | null
        }
      }
      file_uploads: {
        Row: {
          id: string
          form_session_id: string
          file_name: string
          file_size: number
          file_type: string
          file_url: string
          uploaded_at: string
          description: string | null
        }
        Insert: {
          id?: string
          form_session_id: string
          file_name: string
          file_size: number
          file_type: string
          file_url: string
          uploaded_at?: string
          description?: string | null
        }
        Update: {
          id?: string
          form_session_id?: string
          file_name?: string
          file_size?: number
          file_type?: string
          file_url?: string
          uploaded_at?: string
          description?: string | null
        }
      }
    }
    Views: {
      form_submissions_view: {
        Row: {
          id: string
          status: string
          first_name: string | null
          last_name: string | null
          email: string | null
          phone: string | null
          address: string | null
          selected_services: string[] | null
          inside_service_area: boolean | null
          responses: Json | null
          file_count: number | null
          created_at: string
          updated_at: string
        }
      }
    }
    Functions: {
      generate_upload_token: {
        Args: Record<string, never>
        Returns: string
      }
      generate_upload_link: {
        Args: {
          session_id: string
        }
        Returns: string
      }
    }
  }
}