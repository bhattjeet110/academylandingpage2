import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  @ViewChild('facultyTrack') facultyTrack!: ElementRef<HTMLElement>;
  @ViewChild('testimonialsTrack') testimonialsTrack!: ElementRef<HTMLElement>;

  mobileMenuOpen = false;
  activeSession: number | null = null;
  activeFaq: number | null = null;
  currentTestimonial = 0;

  sessions = [
    { title: 'Introduction to Medical Tourism Industry', desc: 'Understand the global medical tourism market and India\'s role.' },
    { title: 'International Patient Flow System', desc: 'How patients come from other countries to Indian hospitals.' },
    { title: 'Hospital Coordination Process', desc: 'Learn how hospitals manage international patients.' },
    { title: 'Pricing & Revenue Model', desc: 'Commission structure, costing, and profit margins.' },
    { title: 'Patient Documentation & Legal Basics', desc: 'Medical reports, visa process, and documentation flow.' },
    { title: 'Communication & Patient Handling', desc: 'How to speak, coordinate, and manage international patients.' },
    { title: 'International Marketing Strategy', desc: 'How to generate international leads and promote services.' },
    { title: 'Business Setup Blueprint', desc: 'How to start your own Medical Tourism agency.' },
    { title: 'Hospital Visit & Live Case Understanding', desc: 'Real-time exposure to hospital operations.' },
    { title: 'Placement Preparation & Interview Training', desc: 'Resume building, interview practice, and job readiness.' }
  ];

  faqs = [
    { q: 'Who can join this program?', a: 'This program is suitable for freshers, graduates, working professionals, entrepreneurs, travel consultants, and anyone interested in the healthcare or medical tourism industry.' },
    { q: 'Do I need a medical background to join?', a: 'No. A medical background is not required. The course is designed so that anyone can understand how the medical tourism ecosystem works.' },
    { q: 'Is this course theoretical or practical?', a: 'The program focuses on practical, industry-oriented learning. It includes case studies, real-world insights, and a hospital visit to understand actual operations.' },
    { q: 'What is the duration of the program?', a: 'The program consists of 10 structured sessions conducted once a week, with approximately 36 hours of offline training over a 3-month period.' },
    { q: 'Where are the classes conducted?', a: 'The training is conducted offline in Andheri East, Mumbai.' },
    { q: 'What is the batch size?', a: 'We maintain small batch sizes to ensure personal attention, better interaction, and effective learning.' },
    { q: 'Will I get placement after completing the program?', a: 'We provide 100% placement support for eligible candidates, including resume preparation, interview guidance, and connections with relevant organizations.' },
    { q: 'What kind of roles can I get after completing this course?', a: 'After completing the program, you may explore roles such as International Patient Coordinator, Medical Tourism Executive, Hospital Business Development Executive, Relationship Manager for International Patients, and Medical Tourism Consultant.' },
    { q: 'What salary can I expect in this field?', a: 'Entry-level salaries may range between \u20B925,000 to \u20B91,00,000 per month, depending on the role, organization, and your performance.' },
    { q: 'Can I start my own medical tourism business after this course?', a: 'Yes. The program includes sessions on business setup, industry operations, and revenue models, which can help you understand how to start your own medical tourism service.' },
    { q: 'Is there a hospital visit included?', a: 'Yes. The course includes a real hospital visit to help students understand international patient departments and medical tourism operations.' },
    { q: 'What does the 50% Cash Back Guarantee mean?', a: 'The 50% Cash Back Guarantee is applicable as per the academy\'s policy and eligibility conditions. Detailed terms will be shared during enrollment.' },
    { q: 'Do you provide study material?', a: 'Yes. Participants receive training materials, industry templates, and interview preparation resources to support their learning.' },
    { q: 'Will there be interview preparation support?', a: 'Yes. The program includes mock interviews, resume building, and 50+ interview Q&A templates to help you prepare for job opportunities.' },
    { q: 'How do I enroll in the program?', a: 'You can enroll by registering through the website form, contacting us on WhatsApp, or speaking with our counselor for further guidance.' },
    { q: 'Are there limited seats in each batch?', a: 'Yes. Each batch has limited seats to ensure better interaction and personal attention.' },
    { q: 'Is this program useful for travel agents or healthcare professionals?', a: 'Yes. Travel agents, healthcare professionals, and entrepreneurs can benefit by expanding into the medical tourism business segment.' },
    { q: 'Can working professionals join this program?', a: 'Yes. Since sessions are conducted on weekend (Saturday) and once a week, working professionals can easily attend the program.' },
    { q: 'Will I receive a certificate after completion?', a: 'Yes. Participants will receive a certificate of completion from SimplifyMVT Academy after successfully finishing the program.' },
    { q: 'Who should not join this program?', a: 'This program may not be suitable for individuals who are not interested in healthcare, business development, or patient coordination roles.' }
  ];

  testimonials = [
    { name: 'Sachi Singhania', text: 'I had completed my BA and was very confused about my career path. After joining this course, I gained clarity and practical knowledge. Today, I am working as the Head of International Operations at Jupiter Hospital.' },
    { name: 'Vivek', text: 'I always wanted a career where I could travel and interact with international clients. Medical tourism gave me that opportunity, and this course helped me get started in the right direction.' },
    { name: 'Ashutosh', text: 'After completing my MBA, I was looking for the right opportunity. This program helped me understand the medical tourism industry and I got placed at Jupiter Hospital. It was the right step for my career.' },
    { name: 'Piyush', text: 'This course gave me practical exposure and a clear understanding of how the industry works. It helped me build confidence and choose the right career direction.' },
    { name: 'Mansi', text: 'The practical sessions and real industry insights helped me grow professionally. Today, I am working as an Operations Leader and managing responsibilities with confidence.' },
    { name: 'Jeevan', text: 'This program provided me with real industry knowledge and practical skills. It helped me understand new opportunities and build a strong foundation for my career.' }
  ];

  programForYou = [
    { icon: '🎓', title: 'Freshers & Graduates', desc: 'If you are confused about your career or looking for the right direction after graduation.' },
    { icon: '💼', title: 'Job Seekers', desc: 'If you are looking for better job opportunities in a growing industry.' },
    { icon: '👔', title: 'Working Professionals', desc: 'If you want to switch your career or move into the healthcare or medical tourism sector.' },
    { icon: '🚀', title: 'Aspiring Entrepreneurs', desc: 'If you want to start your own Medical Tourism business or explore a new business opportunity.' },
    { icon: '🏥', title: 'Healthcare & Paramedical Students', desc: 'If you want to explore non-clinical career opportunities in the healthcare industry.' },
    { icon: '✈️', title: 'Travel & Tourism Professionals', desc: 'If you want to expand into the medical tourism segment and grow your business.' },
    { icon: '🌍', title: 'If You Love Travel', desc: 'Opportunity to work in a travel-based industry with international exposure.' }
  ];

  toggleSession(index: number) {
    this.activeSession = this.activeSession === index ? null : index;
  }

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  nextTestimonial() {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonial = this.currentTestimonial === 0 ? this.testimonials.length - 1 : this.currentTestimonial - 1;
  }

  scrollCarousel(section: 'faculty' | 'testimonials', direction: number) {
    const track = section === 'faculty' ? this.facultyTrack : this.testimonialsTrack;
    if (!track) return;
    const el = track.nativeElement;
    const card = el.querySelector('.faculty-card, .testimonial-card') as HTMLElement;
    if (!card) return;
    const scrollAmount = (card.offsetWidth + 24) * direction;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  scrollTo(id: string) {
    this.mobileMenuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  activePolicy: { title: string; content: string } | null = null;

  policies: Record<string, { title: string; content: string }> = {
    privacy: {
      title: 'Privacy Policy',
      content: `
        <p>SimplifyMVT Academy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
        <h4>1. Information We Collect</h4>
        <p><strong>Personal Information:</strong></p>
        <ul><li>Name</li><li>Phone Number</li><li>Email Address</li><li>City/Location</li><li>Any information submitted through forms</li></ul>
        <p><strong>Non-Personal Information:</strong></p>
        <ul><li>Browser type</li><li>IP address</li><li>Device information</li><li>Website usage data (via cookies)</li></ul>
        <h4>2. How We Use Your Information</h4>
        <ul><li>Contact you regarding course details or inquiries</li><li>Provide counseling and enrollment support</li><li>Send updates, offers, or important information</li><li>Improve our website and services</li><li>Maintain internal records</li></ul>
        <h4>3. Sharing of Information</h4>
        <p>We do <strong>not sell, trade, or rent</strong> your personal information to third parties.</p>
        <p>Your information may be shared only:</p>
        <ul><li>With internal team members for communication</li><li>When required by law or legal authorities</li></ul>
        <h4>4. Cookies</h4>
        <p>Our website may use cookies to enhance user experience and analyse website traffic. You can choose to disable cookies through your browser settings.</p>
        <h4>5. Data Security</h4>
        <p>We take reasonable steps to protect your personal information from unauthorized access, misuse, or disclosure. However, no method of online transmission is 100% secure.</p>
        <h4>6. Third-Party Links</h4>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.</p>
        <h4>7. Your Consent</h4>
        <p>By using our website, you consent to our Privacy Policy and agree to its terms.</p>
        <h4>8. Updates to This Policy</h4>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
        <h4>9. Contact Us</h4>
        <p>Office No 33, 1st Floor, Madhuban Industrial Estate, Off Mahakali Caves Road, Andheri East, Mumbai 400093</p>
        <p>Phone / WhatsApp: +91 88795 88796</p>
        <p>Email: support@simplifymvt.com</p>
        <p><em>"We respect your privacy. Your information is 100% secure with us."</em></p>
      `
    },
    refund: {
      title: 'Refund Policy',
      content: `
        <p>At <strong>SimplifyMVT Academy</strong>, we are committed to providing quality training and career support. Please read our refund policy carefully before enrolling.</p>
        <h4>1. Course Fee</h4>
        <ul><li>All course fees once paid are <strong>non-transferable and non-refundable</strong>.</li><li>Fees cannot be adjusted to another person or batch unless approved by the management.</li></ul>
        <h4>2. Refund Eligibility</h4>
        <p>Refunds are <strong>not applicable</strong> in the following cases:</p>
        <ul><li>Change of mind after enrollment</li><li>Attendance or discontinuation of the course</li><li>Failure to complete the program</li><li>Not clearing interviews or personal performance issues</li></ul>
        <h4>3. 50% Cash Back Guarantee</h4>
        <p>Refund is applicable <strong>only under the 50% Cash Back Guarantee policy</strong>, subject to:</p>
        <ul><li>Completion of the full course</li><li>Minimum required attendance</li><li>Participation in all placement activities</li><li>Compliance with academy rules</li></ul>
        <p>If SimplifyMVT Academy is unable to provide <strong>any job opportunity</strong>, 50% of the course fee will be refunded.</p>
        <h4>4. Refund Process</h4>
        <ul><li>Refund requests must be submitted in writing via email</li><li>Approved refunds will be processed within <strong>15–30 working days</strong></li><li>Administrative charges (if any) may be deducted</li></ul>
        <h4>5. Final Decision</h4>
        <p>All refund decisions are at the discretion of <strong>SimplifyMVT Academy management</strong>, based on eligibility criteria and policy terms.</p>
      `
    },
    terms: {
      title: 'Terms & Conditions',
      content: `
        <p>Welcome to <strong>SimplifyMVT Academy</strong>. By accessing our website, enrolling in our program, or using our services, you agree to comply with the following Terms & Conditions.</p>
        <h4>1. Acceptance of Terms</h4>
        <p>By using our website or enrolling in our course, you agree to be bound by these Terms & Conditions, along with our Privacy Policy and Refund Policy. If you do not agree, please do not use our services.</p>
        <h4>2. Course Enrollment</h4>
        <ul><li>Enrollment is confirmed only after successful payment of course fees.</li><li>Seats are limited and allocated on a <strong>first-come, first-served basis</strong>.</li><li>SimplifyMVT Academy reserves the right to accept or reject any application.</li></ul>
        <h4>3. Course Structure</h4>
        <ul><li>The program consists of <strong>10 sessions conducted offline</strong> in Andheri East, Mumbai.</li><li>Session dates and timings may be subject to change with prior notice.</li><li>The academy reserves the right to modify course content to improve quality.</li></ul>
        <h4>4. Fees & Payment</h4>
        <ul><li>Course fees must be paid as per the agreed structure.</li><li>All payments are non-transferable.</li><li>Any applicable taxes or charges will be additional if required.</li></ul>
        <h4>5. Placement Support Disclaimer</h4>
        <ul><li>We provide <strong>100% placement support</strong> to eligible candidates.</li><li>Placement depends on: Attendance, Performance, Interview readiness, Market conditions.</li><li>We do <strong>not guarantee a specific job role, salary, company or location</strong>.</li></ul>
        <h4>6. 50% Cash Back Guarantee</h4>
        <p>The <strong>50% Cash Back Guarantee</strong> is applicable only if SimplifyMVT Academy is unable to provide a job opportunity to the candidate.</p>
        <ul><li>We are committed to providing <strong>job interview opportunities and placement support</strong> to all eligible candidates.</li><li>However, <strong>selection in interviews depends on the candidate's performance</strong>.</li><li>Candidates must be <strong>willing to accept job opportunities anywhere in India</strong>.</li><li>If no job opportunity is provided despite fulfilling all criteria, <strong>50% of the course fee will be refunded</strong>.</li></ul>
        <h4>7. Attendance & Participation</h4>
        <ul><li>Regular attendance is mandatory.</li><li>Students are expected to actively participate in sessions, assignments, and activities.</li><li>Failure to meet minimum attendance may affect placement support eligibility.</li></ul>
        <h4>8. Code of Conduct</h4>
        <p>Students are expected to maintain professional behavior. Violation may lead to suspension or termination without refund.</p>
        <h4>9. Intellectual Property</h4>
        <p>All course materials, content, and training resources are the property of SimplifyMVT Academy. Participants are not allowed to copy, distribute, or reuse materials without permission.</p>
        <h4>10. Limitation of Liability</h4>
        <p>SimplifyMVT Academy is not liable for job placement outcomes, career decisions made by participants, or any indirect or incidental damages.</p>
        <h4>11. Governing Law</h4>
        <p>These Terms & Conditions are governed by the laws of India. Any disputes will be subject to the jurisdiction of Mumbai, Maharashtra.</p>
        <h4>12. Contact Us</h4>
        <p>Office No 33, 1st Floor, Madhuban Industrial Estate, Off Mahakali Caves Road, Andheri East, Mumbai 400093</p>
        <p>Phone / WhatsApp: +91 88795 88796 | Email: support@simplifymvt.com</p>
      `
    },
    placement: {
      title: 'Placement Guarantee Policy',
      content: `
        <p>SimplifyMVT Academy provides structured placement support to help students build careers in the Medical Tourism industry.</p>
        <h4>1. Placement Support</h4>
        <p>We provide:</p>
        <ul><li>Interview opportunities</li><li>Resume building support</li><li>Mock interview training</li><li>Career guidance</li></ul>
        <h4>2. Placement Guarantee Clarification</h4>
        <ul><li>We are committed to providing <strong>job interview opportunities</strong> to eligible candidates.</li><li>We do <strong>not guarantee job selection</strong>, as it depends on: Candidate performance, Communication skills, Interview results.</li></ul>
        <h4>3. Eligibility for Placement Support</h4>
        <p>To be eligible, candidates must:</p>
        <ul><li>Complete the full course</li><li>Maintain required attendance</li><li>Participate in all placement activities</li><li>Follow academy guidelines</li></ul>
        <h4>4. Job Location</h4>
        <ul><li>Candidates must be open to <strong>job opportunities anywhere in India</strong>.</li><li>Refusal of reasonable job opportunities may affect placement support eligibility.</li></ul>
        <h4>5. 50% Cash Back Guarantee (Placement Linked)</h4>
        <ul><li>Applicable only if <strong>no job opportunity is provided</strong>.</li><li>Not applicable if: Candidate fails interviews, Candidate rejects job offers, Candidate is not active in placement process.</li></ul>
        <h4>6. No Salary / Role Guarantee</h4>
        <p>We do not guarantee: Specific salary, Specific company, or Specific job role. These depend on market conditions and candidate performance.</p>
        <h4>7. Time Frame</h4>
        <p>Placement support will be provided for a reasonable period after course completion.</p>
      `
    }
  };

  openPolicy(key: string) {
    this.activePolicy = this.policies[key] || null;
    document.body.style.overflow = 'hidden';
  }

  closePolicy() {
    this.activePolicy = null;
    document.body.style.overflow = '';
  }
}
