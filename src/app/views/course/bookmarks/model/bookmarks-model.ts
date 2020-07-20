export interface BookmarksModel {
    course_id: number;
    uid: string;
    section_id: number;
    name: string;
    content: Content[];
}
export interface Content {
    type: string;
    id: string;
    name: string;
    bookmarked_time: string;
    dated: string;
}