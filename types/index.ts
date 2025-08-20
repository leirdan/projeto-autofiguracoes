export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface NavbarItem {
  name: string;
  path: string;
}

interface Identifiable {
  id: number;
}

export interface Interview extends Identifiable {
  title: string;
  subtitle: string;
  date: string;
  slug?: string;
  category: "director" | "screenwriter";
  url: string;
}

export interface Category extends Identifiable {
  name: string;
  description: string;
  parent?: Category;
}

export interface Role extends Identifiable {
  name: string;
}

export interface Character extends Identifiable {
  name: string;
  description: string;
  fullDescription: string;
  pdfAvailable: boolean;
  profile: Blob;
  slug: string;
  roles: Role[];
  works: Work[];
  categories: Category[];
}

export interface Work extends Identifiable {
  title: string;
  details: string;
  description?: string;
}

export interface Morphology extends Identifiable {
  title: string;
  subtitle?: string;
  description?: string;
  influence: string;
  influenceDescription?: string;
  examples?: MorphologyExample[];
  slug: string;
  image: string;
}

export type MorphologyExample = Pick<
  Morphology,
  "id" | "title" | "description"
> & {
  details: string;
};

export interface Physiology extends Identifiable {
  title: string;
  subtitle: string;
  description: string;
  influence: string;
  influenceDescription: string;
  caseStudyTitle: string;
  caseStudyDescription: string;
  works: Work[];
  mechanisms: PhysiologyMechanism[];
  slug: string;
}

export type PhysiologyMechanism = Pick<
  Physiology,
  "id" | "title" | "description"
>;

export interface TeamMember extends Identifiable {
  name: string;
  role: string;
  description: string;
}

export interface RelatedContent extends Identifiable {
  title: string;
  description: string;
  type: "article" | "interview" | "analysis";
}
