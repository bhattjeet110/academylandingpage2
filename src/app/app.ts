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
    { name: 'Sachi', text: 'I was confused after graduation. This course gave me clarity and confidence.' },
    { name: 'Ashutosh', text: 'The hospital visit helped me understand real operations.' },
    { name: 'Piyush', text: 'Best decision for my career. Practical and industry-focused training.' },
    { name: 'Student', text: 'The placement preparation sessions were extremely helpful.' }
  ];

  whyTrust = [
    { icon: '📋', title: 'Industry-Focused Curriculum', desc: 'Designed according to current healthcare business demands.' },
    { icon: '🏥', title: 'Hospital Exposure', desc: 'Real hospital visit for practical understanding.' },
    { icon: '👨\u200D🏫', title: 'Experienced Faculties', desc: 'Learn from industry veterans with 13+ years experience.' },
    { icon: '👥', title: 'Small Batch Size', desc: 'Personal attention and better learning environment.' },
    { icon: '💼', title: 'Placement Support', desc: '100% placement support for eligible candidates.' },
    { icon: '🎯', title: 'Career Guidance', desc: 'Resume building, interview prep, and career counselling.' }
  ];

  journeySteps = [
    { emoji: '🤔', label: 'Confused', title: 'Where You Are Now', points: ['Confused about career direction', 'Unsure about MBA or job', 'Looking for a growing industry'] },
    { emoji: '📚', label: 'Learning', title: 'Industry Training Begins', points: ['10 power-packed sessions', 'Real industry knowledge', 'Expert faculty guidance'] },
    { emoji: '🏥', label: 'Experiencing', title: 'Practical Exposure', points: ['Real hospital visit', 'Live case understanding', 'Patient handling training'] },
    { emoji: '🚀', label: 'Career Ready', title: 'Placement & Beyond', points: ['Resume & interview prep', '1:1 mock interviews', '100% placement support'] }
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
}
