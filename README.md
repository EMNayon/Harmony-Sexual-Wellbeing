# Harmony Sexual Wellbeing - Complete Website

## 📝 সাইট বিবরণ

একটি সম্পূর্ণ **Harmony Sexual Wellbeing** ওয়েবসাইট যা যৌন স্বাস্থ্য সম্পর্কে শিক্ষামূলক এবং বিশ্বাসযোগ্য তথ্য প্রদান করে। এটি **Tailwind CSS** দিয়ে তৈরি এবং সম্পূর্ণভাবে responsive।

---

## 🎨 ডিজাইন বৈশিষ্ট্য

### Color Scheme
- **Primary Gradient**: Pink (#FF1A7C) → Blue (#3B5BDB)
- **Secondary Gradient**: Blue (#3B5BDB) → Cyan (#00D4FF)
- **Background**: Light Gray (#f6f4f2)
- **Text**: Dark Gray (#222)

### Typography
- Font Family: **Plus Jakarta Sans** (Google Fonts)
- বাংলা ভাষা সমর্থিত

### Components
- Sticky Navigation
- Hero Sections with Gradients
- Card-based Layouts
- Filter System
- Responsive Grid

---

## 📄 পৃষ্ঠাগুলি

### ১. **Landing Page** (`landing.html`)
হোম পেজ যেখানে রয়েছে:
- আকর্ষণীয় হিরো সেকশন
- ৩টি প্রধান বৈশিষ্ট্য
- ৪টি জনপ্রিয় বিষয়বস্তু কার্ড
- CTA (Call To Action) সেকশন
- ফুটার

**বৈশিষ্ট্য:**
- Gradient backgrounds
- Hover effects
- Mobile responsive design

### ২. **Blog Listing Page** (`blog-listing.html`)
সব ব্লগ পোস্টের তালিকা যেখানে:
- Category filter (ED, PE, Lifestyle, Relationships)
- ৬টি ব্লগ পোস্ট কার্ড
- Dynamic filtering JavaScript
- Reading time indicator

**ফিল্টার বিভাগ:**
- সব ব্লগ
- ED (ইরেক্টাইল ডিসফাংশন)
- PE (প্রিম্যাচিউর এজাকুলেশন)
- লাইফস্টাইল
- সম্পর্ক

### ৩. **Blog Detail Page** (`blog-detail.html`)
একটি সম্পূর্ণ ব্লগ পোস্টের বিস্তারিত দৃশ্য:
- Gradient header
- Full article content
- Author information
- Share buttons
- Related articles section
- Back to blogs button

**কন্টেন্ট ফরম্যাটিং:**
- Headings (h2, h3)
- Paragraphs
- Lists (ul, ol)
- Callout boxes
- Highlighted text

### ৪. **Category Page** (`category-page.html`)
একটি নির্দিষ্ট category এর সব ব্লগ:
- Category header with icon
- Category description
- Featured & Regular posts
- Quick guide section
- CTA section

**এই উদাহরণে:** ED (ইরেক্টাইল ডিসফাংশন) category

---

## 🛠️ কীভাবে ব্যবহার করবেন

### ১. সরাসরি খুলুন
ব্রাউজারে যেকোনো HTML ফাইল খুলুন:
```
landing.html
blog-listing.html
blog-detail.html
category-page.html
```

### ২. সংশোধন করুন
- যেকোনো টেক্স্ট এডিটর দিয়ে খুলুন
- বিষয়বস্তু পরিবর্তন করুন
- ব্যবহার করুন Tailwind CSS classes

### ৩. নতুন পৃষ্ঠা যোগ করুন
কাঠামো অনুসরণ করুন:
```html
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>/* আপনার custom styles */</style>
</head>
<body>
    <!-- Navigation -->
    <!-- Content -->
    <!-- Footer -->
</body>
</html>
```

---

## 📱 Responsive Design

সব পৃষ্ঠা মোবাইল থেকে ডেস্কটপ পর্যন্ত সম্পূর্ণভাবে responsive:

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Navigation:**
- Desktop: Horizontal menu
- Mobile: Collapsed menu (ready for mobile menu)

---

## 🎯 বৈশিষ্ট্য হাইলাইট

### ১. **Color Scheme নিখুঁত**
- Pink থেকে Blue gradient
- Professional এবং friendly লুক
- WCAG accessibility মান অনুসরণ

### ২. **Navigation Structure**
- সব পৃষ্ঠায় consistent navigation
- Landing page থেকে সহজ access
- Back to home লিংক সব জায়গায়

### ৩. **Blog System**
- Category-based organization
- Filter functionality
- Related posts suggestion
- Author information display

### ৪. **Visual Hierarchy**
- Clear headings
- Proper spacing
- Card-based layouts
- Icons and emoji for visual interest

### ৫. **Interactive Elements**
- Hover effects on cards
- Filter buttons with active states
- Smooth transitions
- Responsive buttons

---

## 📊 Content Structure

### Landing Page
```
Hero Section
    ↓
Features Section (3 features)
    ↓
Popular Topics (4 topics)
    ↓
CTA Section
    ↓
Footer
```

### Blog Listing Page
```
Header Section
    ↓
Category Filter
    ↓
Blog Grid (6 posts)
    ↓
Footer
```

### Blog Detail Page
```
Navigation
    ↓
Article Header
    ↓
Full Article Content
    ↓
Author Info
    ↓
Share Buttons
    ↓
Related Articles
    ↓
Footer
```

### Category Page
```
Navigation
    ↓
Category Header
    ↓
Category Description
    ↓
Blog Posts (Featured + Regular)
    ↓
Quick Guide
    ↓
CTA Section
    ↓
Footer
```

---

## 🔧 Tailwind CSS Classes Used

**Primary Classes:**
- `gradient-primary` - Main gradient (Pink → Blue)
- `gradient-secondary` - Secondary gradient (Blue → Cyan)
- Grid layouts: `grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-3`
- Spacing: `py-`, `px-`, `mb-`, `gap-`
- Typography: `text-`, `font-bold`, `font-semibold`
- Effects: `shadow-`, `rounded-`, `hover:`, `transition`

**Responsive Prefixes:**
- `md:` - Medium screens and up (768px)
- `lg:` - Large screens and up (1024px)

---

## ✅ SEO & Accessibility

- Proper HTML semantic structure
- Meta tags for description
- Heading hierarchy (H1, H2, H3)
- Alt text support
- Color contrast ratios
- Mobile viewport settings

---

## 📝 কাস্টমাইজেশন গাইড

### রং পরিবর্তন করতে
CSS এর মধ্যে গ্র্যাডিয়েন্ট পরিবর্তন করুন:
```css
.gradient-primary {
    background: linear-gradient(135deg, #নতুন_রং1 0%, #নতুন_রং2 100%);
}
```

### ফন্ট পরিবর্তন করতে
Google Fonts থেকে নতুন ফন্ট যোগ করুন:
```html
<link href="https://fonts.googleapis.com/css2?family=নতুন_ফন্ট&display=swap" rel="stylesheet">
```

### নতুন বিভাগ যোগ করতে
`blog-listing.html` এ নতুন বাটন এবং ডেটা-attribute যোগ করুন।

---

## 🎓 শেখার সম্পদ

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **HTML Guide**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **Google Fonts**: https://fonts.google.com

---

## 📞 সাপোর্ট

কোনো সমস্যা হলে:
1. HTML সিন্টাক্স চেক করুন
2. Tailwind CDN link আছে কিনা দেখুন
3. ব্রাউজার console এ errors দেখুন
4. Mobile view এ test করুন

---

## 🎉 Harmony Website - সম্পূর্ণ প্যাকেজ

এই ওয়েবসাইট সম্পূর্ণভাবে:
✅ Functional
✅ Responsive
✅ Beautiful Design
✅ Easy to Customize
✅ SEO Optimized
✅ Accessible

**উপভোগ করুন আপনার নতুন ওয়েবসাইট! 🚀**

---

*© २०२४ Harmony Sexual Wellbeing*
