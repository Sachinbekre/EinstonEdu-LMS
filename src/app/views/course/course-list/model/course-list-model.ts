export interface courseList {
    course_id: number;
    uid: string;
    favourite: boolean;
    content_total: number;
    last_visit: string;
    content_progress: number;
    preference: Preference;
    time_spent: number;
    expirydate: string;
    contents: Content[];
    assignment: Assignment[];
}
export interface Preference {
    caption: string;
    trackable: boolean;
}
export interface Content {
    section: number;
    name: string;
    seen: number;
    content: Content2[];
}
export interface Content2 {
    type: string;
    id: string;
    chapter_no: string;
    name: string;
    time: string;
    seen: boolean;
    time_spent: number;
}
export interface Assignment {
    title: string;
    id: string;
    submitted: boolean;
    reviewed: boolean;
    rating: number;
    added: string;
    due: string;
}