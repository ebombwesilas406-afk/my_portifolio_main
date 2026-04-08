export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number;
          title: string;
          description: string;
          tech_stack: string;
          image_url: string | null;
          github_url: string | null;
          live_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          title: string;
          description: string;
          tech_stack: string;
          image_url?: string | null;
          github_url?: string | null;
          live_url?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["projects"]["Insert"]>;
        Relationships: [];
      };
      skills: {
        Row: {
          id: number;
          name: string;
          category: "language" | "tool" | "concept";
          level: number;
        };
        Insert: {
          id?: number;
          name: string;
          category: "language" | "tool" | "concept";
          level: number;
        };
        Update: Partial<Database["public"]["Tables"]["skills"]["Insert"]>;
        Relationships: [];
      };
      services: {
        Row: {
          id: number;
          title: string;
          description: string;
          icon: string;
        };
        Insert: {
          id?: number;
          title: string;
          description: string;
          icon: string;
        };
        Update: Partial<Database["public"]["Tables"]["services"]["Insert"]>;
        Relationships: [];
      };
      messages: {
        Row: {
          id: number;
          name: string;
          email: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          message: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["messages"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
