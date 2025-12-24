<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'About Us - Tidewater Senior Events',
  meta: [
    { name: 'description', content: 'Learn about Tidewater Senior Events and our mission to connect seniors in the Hampton Roads area with engaging activities and events.' },
    { name: 'keywords', content: 'about, senior community, Tidewater, mission, senior events organization' },
    { property: 'og:title', content: 'About Us - Tidewater Senior Events' },
    { property: 'og:description', content: 'Learn about our mission to connect seniors in the Hampton Roads area with engaging activities and events.' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="hero hero-small">
      <div class="container">
        <h1>About Us</h1>
        <p class="hero-subtitle">Learn more about Tidewater Senior Events and our mission</p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="section">
      <div class="container">
        <div class="content-wrapper">
          <div class="content-card">
            <p class="intro-text">
              Welcome to Tidewater Senior Events! We are dedicated to connecting seniors in the Tidewater area 
              with engaging activities, events, and resources that enrich their lives.
            </p>
          </div>

          <div class="content-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to create a vibrant community where seniors can discover, participate in, and share 
              events that promote social connection, learning, and wellbeing.
            </p>
          </div>

          <div class="content-section">
            <h2>What We Offer</h2>
            <div class="features-list">
              <div class="feature-item">
                <span class="feature-icon">📅</span>
                <span>A comprehensive calendar of senior-friendly events in the Tidewater region</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📰</span>
                <span>Monthly featured resources to help seniors live their best lives</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎉</span>
                <span>An easy way for organizations and individuals to share their events with our community</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🤝</span>
                <span>A welcoming space for seniors to stay informed and connected</span>
              </div>
            </div>
          </div>

          <div class="content-section">
            <h2>Get Involved</h2>
            <p>
              Whether you're looking for activities to attend or have an event to share, we invite you to be 
              part of our growing community.
            </p>
            <div class="cta-buttons">
              <router-link to="/add-event" class="btn btn-primary">Add Your Event</router-link>
              <router-link to="/" class="btn btn-outline">View Calendar</router-link>
            </div>
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
  max-width: var(--max-width-content);
  margin: 0 auto;
}

.content-card {
  background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-gray-100) 100%);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-12);
}

.intro-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-gray-700);
  text-align: center;
  margin: 0;
}

.content-section {
  margin-bottom: var(--spacing-12);
}

.content-section h2 {
  margin-bottom: var(--spacing-6);
  color: var(--color-gray-900);
}

.content-section p {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-gray-600);
}

/* Features List */
.features-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
  background-color: var(--color-gray-50);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  color: var(--color-gray-700);
}

.feature-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: var(--spacing-4);
  flex-wrap: wrap;
  margin-top: var(--spacing-6);
}

@media (max-width: 768px) {
  .hero-small {
    padding: var(--spacing-12) var(--spacing-4);
  }

  .content-card {
    padding: var(--spacing-6);
  }

  .feature-item {
    font-size: var(--font-size-base);
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-buttons .btn {
    width: 100%;
  }
}
</style>
