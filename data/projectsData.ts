import { Project } from '../types';

export const projects: Project[] = [
  {
    "id": "project-1",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "category": "Website Creation",
    "client": "Innovate Corp",
    "technologies": ["React", "Next.js", "Sanity CMS"],
    "websiteUrl": "https://example.com",
    "galleryImages": [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      "https://images.unsplash.com/photo-1586953208448-307315187178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    "translations": {
      "en": {
        "title": "Innovate Corp Corporate Website",
        "description": "A modern, fast, and SEO-friendly corporate website.",
        "longDescription": "Innovate Corp needed a complete overhaul of their online presence to better reflect their brand as a leader in the tech industry. We designed and developed a cutting-edge website using a headless CMS for maximum flexibility.",
        "challenge": "The old website was slow, outdated, and not mobile-friendly. It failed to communicate their brand value and was difficult to update.",
        "solution": "We built a new site on Next.js with Sanity CMS for the backend. This provided a blazing-fast user experience, a beautiful responsive design, and an easy-to-use content management system for their team.",
        "servicesProvided": ["Website Design", "Next.js Development", "CMS Integration", "SEO Optimization"]
      },
      "el": {
        "title": "Εταιρική Ιστοσελίδα Innovate Corp",
        "description": "Μια σύγχρονη, γρήγορη και φιλική προς τις μηχανές αναζήτησης εταιρική ιστοσελίδα.",
        "longDescription": "Η Innovate Corp χρειαζόταν μια πλήρη ανανέωση της διαδικτυακής της παρουσίας για να αντικατοπτρίζει καλύτερα την εικόνα της ως ηγέτης στον κλάδο της τεχνολογίας. Σχεδιάσαμε και αναπτύξαμε μια ιστοσελίδα αιχμής χρησιμοποιώντας headless CMS για μέγιστη ευελιξία.",
        "challenge": "Η παλιά ιστοσελίδα ήταν αργή, ξεπερασμένη και όχι φιλική προς τα κινητά. Απέτυχε να επικοινωνήσει την αξία της επωνυμίας τους και ήταν δύσκολη στην ενημέρωση.",
        "solution": "Δημιουργήσαμε μια νέα ιστοσελίδα με Next.js και Sanity CMS για το backend. Αυτό παρείχε μια αστραπιαία εμπειρία χρήστη, έναν όμορφο responsive σχεδιασμό και ένα εύχρηστο σύστημα διαχείρισης περιεχομένου για την ομάδα τους.",
        "servicesProvided": ["Σχεδιασμός Ιστοσελίδας", "Ανάπτυξη Next.js", "Ενσωμάτωση CMS", "Βελτιστοποίηση SEO"]
      }
    }
  },
  {
    "id": "project-2",
    "imageUrl": "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "category": "E-shop Development",
    "client": "Fashion Forward",
    "technologies": ["Shopify", "Liquid", "React"],
    "websiteUrl": "https://example.com",
    "galleryImages": [],
    "translations": {
      "en": {
        "title": "Fashion Forward E-commerce Store",
        "description": "A stylish and high-converting Shopify store for a fashion brand.",
        "longDescription": "Fashion Forward is a growing apparel brand that needed a powerful and visually appealing e-commerce platform to scale their business. We developed a custom Shopify theme tailored to their brand identity.",
        "challenge": "Their previous store lacked brand personality and had a cumbersome checkout process, leading to high cart abandonment rates.",
        "solution": "We created a bespoke Shopify theme with a focus on user experience and mobile-first design. We streamlined the checkout process and integrated various apps to enhance marketing and customer retention.",
        "servicesProvided": ["Shopify Theme Development", "UI/UX Design", "App Integration", "Conversion Rate Optimization"]
      },
      "el": {
        "title": "E-commerce Κατάστημα Fashion Forward",
        "description": "Ένα κομψό και υψηλής μετατροπής κατάστημα Shopify για μια μάρκα μόδας.",
        "longDescription": "Η Fashion Forward είναι μια αναπτυσσόμενη μάρκα ένδυσης που χρειαζόταν μια ισχυρή και οπτικά ελκυστική πλατφόρμα ηλεκτρονικού εμπορίου για να επεκτείνει την επιχείρησή της. Αναπτύξαμε ένα προσαρμοσμένο θέμα Shopify προσαρμοσμένο στην ταυτότητα της μάρκας τους.",
        "challenge": "Το προηγούμενο κατάστημά τους δεν είχε προσωπικότητα και είχε μια δυσκίνητη διαδικασία ολοκλήρωσης αγοράς, οδηγώντας σε υψηλά ποσοστά εγκατάλειψης καλαθιού.",
        "solution": "Δημιουργήσαμε ένα προσαρμοσμένο θέμα Shopify με έμφαση στην εμπειρία χρήστη και τον σχεδιασμό με προτεραιότητα τα κινητά. Βελτιστοποιήσαμε τη διαδικασία ολοκλήρωσης αγοράς και ενσωματώσαμε διάφορες εφαρμογές για την ενίσχυση του μάρκετινγκ και της διατήρησης πελατών.",
        "servicesProvided": ["Ανάπτυξη Θέματος Shopify", "Σχεδιασμός UI/UX", "Ενσωμάτωση Εφαρμογών", "Βελτιστοποίηση Ποσοστού Μετατροπής"]
      }
    }
  },
  {
    "id": "project-3",
    "imageUrl": "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "category": "Technical Support",
    "client": "Global Solutions",
    "technologies": ["AWS", "Node.js", "React"],
    "websiteUrl": null,
    "galleryImages": [],
    "translations": {
      "en": {
        "title": "Ongoing Support for Global Solutions",
        "description": "Providing 24/7 technical support and maintenance.",
        "longDescription": "Global Solutions relies on us for ongoing maintenance, security, and performance optimization for their suite of web applications. We act as their dedicated technical partner.",
        "challenge": "They needed a reliable partner to handle server management, security updates, bug fixes, and performance monitoring, allowing their internal team to focus on new features.",
        "solution": "We established a comprehensive support plan with a dedicated team, 24/7 monitoring, and a streamlined ticketing system. We proactively manage their infrastructure on AWS and ensure their applications are always secure and performant.",
        "servicesProvided": ["24/7 Support", "AWS Management", "Security Audits", "Performance Monitoring"]
      },
      "el": {
        "title": "Συνεχής Υποστήριξη για την Global Solutions",
        "description": "Παροχή 24/7 τεχνικής υποστήριξης και συντήρησης.",
        "longDescription": "Η Global Solutions βασίζεται σε εμάς για τη συνεχή συντήρηση, την ασφάλεια και τη βελτιστοποίηση της απόδοσης της σουίτας των διαδικτυακών της εφαρμογών. Λειτουργούμε ως ο αποκλειστικός τεχνικός τους συνεργάτης.",
        "challenge": "Χρειάζονταν έναν αξιόπιστο συνεργάτη για τη διαχείριση των διακομιστών, τις ενημερώσεις ασφαλείας, τις διορθώσεις σφαλμάτων και την παρακολούθηση της απόδοσης, επιτρέποντας στην εσωτερική τους ομάδα να επικεντρωθεί σε νέα χαρακτηριστικά.",
        "solution": "Δημιουργήσαμε ένα ολοκληρωμένο σχέδιο υποστήριξης με μια αφοσιωμένη ομάδα, 24/7 παρακολούθηση και ένα βελτιστοποιημένο σύστημα αιτημάτων. Διαχειριζόμαστε προληπτικά την υποδομή τους στο AWS και διασφαλίζουμε ότι οι εφαρμογές τους είναι πάντα ασφαλείς και αποδοτικές.",
        "servicesProvided": ["Υποστήριξη 24/7", "Διαχείριση AWS", "Έλεγχοι Ασφαλείας", "Παρακολούθηση Απόδοσης"]
      }
    }
  }
];
