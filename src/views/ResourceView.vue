<template>
  <div class="resource">
    <!-- Hero Section -->
    <section class="hero hero-small">
      <div class="container">
        <h1>Resource Of The Month</h1>
        <p class="hero-subtitle">Each month, we highlight a valuable resource for seniors in the Tidewater area</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="section">
      <div class="container">
        <div class="content-wrapper">
          <!-- D&D Medical Transport -->
          <div class="resource-card">
            <div class="resource-image">
              <img src="/images/d-d-medical.avif" alt="D&D Medical Transport" />
            </div>
            <div class="resource-content">
              <h2>D&D Medical Transport</h2>
              <p>
                D&D Medical Transport is a family owned and operated, non-emergency medical transport 
                company based in Virginia Beach, Virginia. We're here to transport you or your loved 
                ones to medical appointments throughout Hampton Roads and surrounding areas including 
                Virginia Beach, Norfolk, Portsmouth, Chesapeake, Suffolk, Hampton, and Newport News.
              </p>
              <p>
                We provide ambulatory, wheelchair, and stretcher services to support your family's 
                transportation needs.
              </p>
              <a href="https://www.ddmedicaltransport.com/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                Visit Website
              </a>
            </div>
          </div>

          <!-- JenCare -->
          <div class="resource-card">
            <div class="resource-image">
              <img src="/images/jencare.avif" alt="JenCare Senior Medical Center" />
            </div>
            <div class="resource-content">
              <h2>JenCare Senior Medical Center</h2>
              <p class="accepting-badge">Now Accepting New Patients!</p>
              <p>
                JenCare Senior Medical Center provides comprehensive primary care services 
                designed specifically for seniors in the Hampton Roads area.
              </p>
              <p class="contact-info">
                <strong>For more information, please call:</strong><br />
                Roshawn Foote-Scott at <a href="tel:+17578051410">(757) 805-1410</a>
              </p>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="cta-card">
            <h3>Have a Resource to Share?</h3>
            <p>
              Know of a great resource that would benefit seniors in the Tidewater area? 
              We'd love to hear about it!
            </p>
            <router-link to="/add-event" class="btn btn-primary btn-lg">Contact Us</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero-small {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: var(--spacing-16) var(--spacing-4);
  text-align: center;
}

.hero-small h1 {
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
}

.hero-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Content */
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

/* Resource Card */
.resource-card {
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  margin-bottom: var(--spacing-8);
  display: grid;
  grid-template-columns: 1fr;
}

.resource-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.resource-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.resource-content {
  padding: var(--spacing-8);
}

.resource-content h2 {
  margin-bottom: var(--spacing-4);
  color: var(--color-primary);
}

.resource-content p {
  font-size: var(--font-size-base);
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-4);
}

.resource-content p:last-of-type {
  margin-bottom: var(--spacing-6);
}

.accepting-badge {
  display: inline-block;
  background-color: var(--color-secondary);
  color: var(--color-white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
}

.contact-info {
  background-color: var(--color-gray-50);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary);
}

.contact-info a {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.contact-info a:hover {
  color: var(--color-primary-dark);
}

/* CTA Card */
.cta-card {
  background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-gray-100) 100%);
  border-radius: var(--radius-xl);
  padding: var(--spacing-10);
  text-align: center;
}

.cta-card h3 {
  margin-bottom: var(--spacing-4);
}

.cta-card p {
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-6);
}

@media (min-width: 768px) {
  .resource-card {
    grid-template-columns: 300px 1fr;
  }

  .resource-image {
    height: auto;
  }
}

@media (max-width: 768px) {
  .hero-small {
    padding: var(--spacing-12) var(--spacing-4);
  }

  .resource-content {
    padding: var(--spacing-6);
  }

  .resource-image {
    height: 200px;
  }

  .cta-card {
    padding: var(--spacing-6);
  }
}
</style>
