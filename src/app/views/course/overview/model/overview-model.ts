export interface OverviewModel {
    course_id: number;
    category: string;
    sub_category: string;
    course_name: string;
    course_tagline: string;
    cover_page: string;
    course_details: CourseDetails;
    course_takeaway: string;
    author: Author[];
    content: Content[];
    subscription: Subscription;
    related_courses: RelatedCours[];
    tools: Tool[];
}
export interface CourseDetails {
    course_desc: string;
    enrollments: number;
    caption: boolean;
    total_duration: string;
    ratings: number;
    total_lectures: number;
    languages: string[];
    skill_level: string;
    features: string[];
}
export interface Author {
    id: string;
    name: string;
}
export interface Content {
    header_name: string;
    content: Content2[];
}
export interface Content2 {
    type: string;
    content_id: string;
    content_name: string;
    content_duration: string;
    locked: boolean;
}
export interface Subscription {
    amount: string;
    duration_type: string;
    duration: string;
}
export interface RelatedCours {
    id: number;
    name: string;
}
export interface Tool {
    title: string;
    tool_id: string;
}