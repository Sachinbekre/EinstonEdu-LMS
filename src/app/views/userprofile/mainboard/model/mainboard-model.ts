export interface RootObject {
    uid: string;
    user_id: string;
    user_type: string;
    account_level: number;
    avatar: string;
    mobile: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    queries: Queries;
    financial: Financial;
    billing_address: BillingAddress;
    shipping_address: ShippingAddress;
    additional_address: AdditionalAddress[];
    headline: string;
    biography: string;
    website: string;
    social_links: SocialLinks;
    app_preferences: AppPreferences;
    privacy: Privacy;
    notifications: Notifications;
    currency_code: string;
}
export interface Queries {
    pending_issue: number;
    notes: string;
}
export interface Financial {
    wallet_balance: number;
    spent: number;
    refunds: number;
    purchase: number;
    issues: number;
}
export interface BillingAddress {
    attention: string;
    address: string;
    street2: string;
    state_code: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    fax: string;
    phone: string;
    type: string;
}
export interface ShippingAddress {
    attention: string;
    address: string;
    street2: string;
    state_code: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    fax: string;
    phone: string;
    type: string;
}
export interface AdditionalAddress {
    attention: string;
    address: string;
    street2: string;
    state_code: string;
    city: string;
    state: string;
    zip: number;
    country: string;
    fax: string;
    phone: string;
    type: string;
}
export interface SocialLinks {
    github: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
}
export interface AppPreferences {
    theme_color: string;
}
export interface Privacy {
    show_courses_taken: boolean;
    search_engine_visibility: boolean;
    anonymous_profile_sharing: boolean;
    interest_accessment: boolean;
    grammercheck: boolean;
    customercare_contact: boolean;
}
export interface Notifications {
    announcement_from_instructor: boolean;
    promotional_emails: boolean;
}