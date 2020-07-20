
export interface QandAModel {
    course_id: number;
    content_id: string;
    uid: string;
    userAvatar: string;
    faq_id: string;
    faq_title: string;
    faq_data: string;
    faq_comments: number;
    faq_by: string;
    approved: boolean;
    approved_on: string;
    approved_by: string;
    approval_action: boolean;
    status: string;
    report: boolean;
    report_reason: ReportReason[];
    followers: any[];
    views: number;
}
export interface ReportReason {
    user: string;
    data: string;
}