<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Tidewater Senior Events - Senior Activities in Hampton Roads',
  meta: [
    { name: 'description', content: 'Discover senior-friendly events, activities, and social gatherings in the Tidewater and Hampton Roads area. Connect with your community!' },
    { name: 'keywords', content: 'senior events, Tidewater, Hampton Roads, Virginia Beach, Norfolk, senior activities, elderly events' },
    { property: 'og:title', content: 'Tidewater Senior Events - Senior Activities in Hampton Roads' },
    { property: 'og:description', content: 'Discover senior-friendly events, activities, and social gatherings in the Tidewater and Hampton Roads area.' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Tidewater Senior Events</h1>
        <p class="hero-tagline">We're not slowing down — We're just getting warmed up!</p>
        <p class="hero-subtitle">
          Whether you're newly retired, semi-retired, or just embracing your next chapter, 
          this is your space to explore, connect, and celebrate life with people who get it.
        </p>
        <div class="hero-buttons">
          <router-link to="/add-event" class="btn btn-primary btn-lg">Add Your Event</router-link>
          <router-link to="#calendar" class="btn btn-outline btn-lg">View Calendar</router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about-section">
      <div class="container">
        <div class="about-content">
          <p class="about-text">
            Enjoy a chance to get out, socialize, and celebrate life with other seniors through 
            engaging activities and events in the Tidewater region. If you are a member of a Club, 
            Organization, Senior Ministry, Senior Group that has events or just know of an event 
            that you would like to share with other seniors, please click the "Add Your Event" button above.
          </p>
          <p class="about-text">
            This is a newly launched site so don't be shy to share your events throughout Hampton Roads 
            so that others can take part in the fun! Don't forget to check out our event calendar below 
            to see what's happening in your area.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Calendar Section -->
    <section id="calendar" class="section calendar-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Upcoming Events</h2>
          <p class="section-subtitle">Find your next adventure in the Tidewater area</p>
        </div>
        <div class="calendar-wrapper">
          <!-- Note: Update the src URL with your actual Google Calendar ID -->
          <iframe 
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showTitle=0&showPrint=0&showCalendars=0"
            style="border-width:0" 
            width="800" 
            height="600" 
            frameborder="0" 
            scrolling="no"
            title="Event Calendar"
          ></iframe>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.home {
  /* Hero section spans full width */
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: var(--spacing-20) var(--spacing-4);
  text-align: center;
}

.hero h1 {
  color: var(--color-white);
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-4);
}

.hero-tagline {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-4);
  font-style: italic;
}

.hero-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto var(--spacing-8);
  line-height: var(--line-height-relaxed);
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

.hero .btn-outline {
  border-color: var(--color-white);
  color: var(--color-white);
}

.hero .btn-outline:hover {
  background-color: var(--color-white);
  color: var(--color-primary);
}

/* About Section */
.about-section {
  background-color: var(--color-gray-50);
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.about-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-6);
}

.about-text:last-child {
  margin-bottom: 0;
}

/* Calendar Section */
.calendar-section {
  background-color: var(--color-white);
}

.calendar-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.calendar-wrapper iframe {
  max-width: 100%;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: var(--font-size-3xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  .calendar-wrapper iframe {
    width: 100%;
    height: 500px;
  }
}
</style>
