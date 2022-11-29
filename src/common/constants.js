import { format, addDays } from 'date-fns'

export const wordCounts = [
    150,
    300,
    500,
    700,
    1000,
    1500,
    2000,
    2500,
    3000,
    3500,
    4000,
    4500,
    5000,
    5500,
    6000
]

export const seoWordCount = [
    500,
    1000,
    1500,
    2000,
    2500,
    3000,
    3500,
    4000
]

export const smmWordCount = [
    100,
    200,
    300,
    400,
    500,
    700,
    1000
]

export const contentTypes = [
    'Article',
    'Blog Post',
    'Seo Optimized Content',
    'Social Media Content',
    'Other'
]

export const languages = [
    '🇺🇸 English',
    '🇪🇸 Spanish',
    '🇨🇳 Chinese',
    '🇫🇷 French',
    '🇩🇪 German',
]

export const categories = ['Arts & Crafts', 'Beauty', 'Business & Economy', 'Cars & Transportation', 'Casino Gaming', 'Computer & Software', 'Craftsmanship', 'Editing', 'Education', 'Electronic Entertainment', 'Electronics', 'Employment & Careers', 'Entertainment', 'Environment', 'Events', 'Fashion', 'Finance', 'Fitness & Lifestyle', 'Food & Beverages', 'Gardening & Plants', 'Health & Medicine', 'History & Politics', 'Hobbies', 'Home & Living', 'Horoscopes & Fortunes', 'Hospitality', 'Internet', 'Jewelry & Precious Metals', 'Languages & Translations (into US English)', 'Law', 'Literature', 'Logistics', 'Love & Relationships', 'Marketing', 'Mature Subject Matter', 'Media & Telecommunication', 'Miscellaneous', 'Music & Dance', 'News & Current Events', 'Parenting & Family', 'Pets & Animals', 'Product & Category Descriptions', 'Real Estate', 'Science', 'Shopping', 'Social Media Posts', 'Spiritualism & Philosophy', 'Sports', 'Travel & Tourism', 'Website Content']

export const getDatesOfWeek = () => {
    return [
        `1 Day (${format(addDays(new Date(), 1), 'EEE, MMM do')})`,
        `2 Days (${format(addDays(new Date(), 2), 'EEE, MMM do')})`,
        `3 Days (${format(addDays(new Date(), 3), 'EEE, MMM do')})`,
        `4 Days (${format(addDays(new Date(), 4), 'EEE, MMM do')})`,
        `5 Days (${format(addDays(new Date(), 5), 'EEE, MMM do')})`,
        `6 Days (${format(addDays(new Date(), 6), 'EEE, MMM do')})`,
    ]
}