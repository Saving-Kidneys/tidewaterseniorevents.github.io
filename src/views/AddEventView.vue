<template>
  <div class="add-event">
    <!-- Hero Section -->
    <section class="hero hero-small">
      <div class="container">
        <h1>Add Your Event</h1>
        <p class="hero-subtitle">Have an event for seniors in the Tidewater area? We'd love to feature it on our calendar!</p>
      </div>
    </section>

    <!-- Form Section -->
    <section class="section">
      <div class="container">
        <div class="form-wrapper">
          <form @submit.prevent="handleSubmit" class="event-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  required 
                  placeholder="Enter your name"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Your Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  required 
                  placeholder="your.email@example.com"
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="phone" class="form-label">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone" 
                placeholder="(555) 123-4567"
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="eventName" class="form-label">Event Name *</label>
              <input 
                type="text" 
                id="eventName" 
                v-model="formData.eventName" 
                required 
                placeholder="Name of your event"
                class="form-input"
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="eventDate" class="form-label">Event Date *</label>
                <input 
                  type="date" 
                  id="eventDate" 
                  v-model="formData.eventDate" 
                  required 
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="eventTime" class="form-label">Event Time *</label>
                <input 
                  type="time" 
                  id="eventTime" 
                  v-model="formData.eventTime" 
                  required 
                  class="form-input"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="location" class="form-label">Location *</label>
              <input 
                type="text" 
                id="location" 
                v-model="formData.location" 
                required 
                placeholder="Event location or address"
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="description" class="form-label">Event Description *</label>
              <textarea 
                id="description" 
                v-model="formData.description" 
                required 
                rows="5"
                placeholder="Tell us about your event..."
                class="form-textarea"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="website" class="form-label">Event Website/Link</label>
              <input 
                type="url" 
                id="website" 
                v-model="formData.website" 
                placeholder="https://example.com"
                class="form-input"
              />
            </div>

            <div v-if="submitMessage" :class="['submit-message', submitStatus]">
              {{ submitMessage }}
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Submit Event' }}
            </button>
          </form>

          <div class="contact-card">
            <div class="contact-icon">✉️</div>
            <h3>Prefer Email?</h3>
            <p>
              You can also reach us directly at:
            </p>
            <a href="mailto:hello@tidewaterseniorevents.com" class="contact-email">hello@tidewaterseniorevents.com</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  eventName: '',
  eventDate: '',
  eventTime: '',
  location: '',
  description: '',
  website: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

const handleSubmit = () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  // Create mailto link with form data
  const subject = encodeURIComponent(`New Event Submission: ${formData.value.eventName}`)
  const body = encodeURIComponent(`
Event Submission Details:

Submitted by: ${formData.value.name}
Email: ${formData.value.email}
Phone: ${formData.value.phone || 'Not provided'}

Event Information:
Name: ${formData.value.eventName}
Date: ${formData.value.eventDate}
Time: ${formData.value.eventTime}
Location: ${formData.value.location}
Website: ${formData.value.website || 'Not provided'}

Description:
${formData.value.description}
`)

  const mailtoLink = `mailto:hello@tidewaterseniorevents.com?subject=${subject}&body=${body}`
  
  // Open email client
  window.location.href = mailtoLink
  
  // Show success message
  setTimeout(() => {
    isSubmitting.value = false
    submitMessage.value = 'Your email client has been opened. Please send the email to complete your submission.'
    submitStatus.value = 'success'
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      eventName: '',
      eventDate: '',
      eventTime: '',
      location: '',
      description: '',
      website: ''
    }
  }, 500)
}
</script>

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

/* Form Wrapper */
.form-wrapper {
  max-width: var(--max-width-content);
  margin: 0 auto;
}

/* Form Styles */
.event-form {
  background-color: var(--color-white);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-8);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
}

.form-group {
  margin-bottom: var(--spacing-5);
}

.form-label {
  display: block;
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-2);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-base);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgb(37 99 235 / 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

/* Submit Message */
.submit-message {
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-4);
  text-align: center;
}

.submit-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* Submit Button */
.btn-submit {
  width: 100%;
}

.btn-submit:disabled {
  background-color: var(--color-gray-400);
  cursor: not-allowed;
}

/* Contact Card */
.contact-card {
  background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-gray-100) 100%);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  text-align: center;
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-4);
}

.contact-card h3 {
  margin-bottom: var(--spacing-2);
}

.contact-card p {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-2);
}

.contact-email {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.contact-email:hover {
  color: var(--color-primary-dark);
}

@media (max-width: 768px) {
  .hero-small {
    padding: var(--spacing-12) var(--spacing-4);
  }

  .event-form {
    padding: var(--spacing-6);
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: var(--spacing-6);
  }
}
</style>
