import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
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
    { q: 'Who can join this course?', a: 'Freshers, graduates, healthcare students, MBA aspirants, and aspiring entrepreneurs.' },
    { q: 'Is this course theoretical or practical?', a: 'It is a practical, industry-oriented course with hospital visit exposure.' },
    { q: 'What is the duration?', a: 'The program consists of 10 structured sessions and 36 hours offline session.' },
    { q: 'Is placement guaranteed?', a: 'We provide structured placement support and interview preparation. Placement guarantee applies as per eligibility criteria.' },
    { q: 'Can I start my own business after this course?', a: 'Yes. We teach the business model and setup process for starting your own Medical Tourism agency.' },
    { q: 'Is prior medical knowledge required?', a: 'No. Basic graduation and willingness to learn is enough.' },
    { q: 'Is this online or offline?', a: 'This is an offline classroom training program in Andheri East, Mumbai.' },
    { q: 'What salary can I expect?', a: 'Entry-level salary may range between ₹25,000 – ₹80,000 depending on role and performance.' },
    { q: 'What is the batch size?', a: 'We maintain small batches to ensure personal attention and better learning.' },
    { q: 'How do I enroll?', a: 'You can apply online through this page or contact us directly via WhatsApp or call.' }
  ];

  testimonials = [
    { name: 'Sachi', text: 'I was confused after graduation. This course gave me clarity and confidence.' },
    { name: 'Ashutosh', text: 'The hospital visit helped me understand real operations.' },
    { name: 'Piyush', text: 'Best decision for my career. Practical and industry-focused training.' },
    { name: 'Student', text: 'The placement preparation sessions were extremely helpful.' }
  ];

  whyUs = [
    { icon: '🎯', title: 'Practical Over Theory', desc: 'We focus on real-world application, not just classroom lectures.' },
    { icon: '🏥', title: 'Hospital Exposure', desc: 'Understand how international patient departments actually work.' },
    { icon: '📋', title: 'Industry-Oriented Curriculum', desc: 'Designed according to current healthcare business demands.' },
    { icon: '💼', title: 'Career-Focused Approach', desc: 'Resume building, interview preparation, and placement support.' },
    { icon: '👥', title: 'Limited Batch Size', desc: 'Personal attention and better learning environment.' },
    { icon: '📍', title: 'Prime Location in Mumbai', desc: 'Andheri East — access to leading hospitals and business hubs.' }
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

  scrollTo(id: string) {
    this.mobileMenuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
