<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Resource Of The Month', path: '/resource' },
  { name: 'Add Your Event', path: '/add-event' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <!-- Top Row: Logo and Mobile Toggle -->
      <div class="header-top">
        <RouterLink to="/" class="logo" @click="closeMenu">
          <span class="logo-text">Tidewater Senior Events</span>
        </RouterLink>

        <!-- Mobile Menu Button -->
        <button
          class="menu-toggle"
          :class="{ 'is-active': isMenuOpen }"
          @click="toggleMenu"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
        >
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button>
      </div>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.path" class="nav-item">
            <RouterLink :to="link.path" class="nav-link">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile Navigation -->
      <nav class="nav-mobile" :class="{ 'is-open': isMenuOpen }">
        <ul class="nav-list-mobile">
          <li v-for="link in navLinks" :key="link.path" class="nav-item-mobile">
            <RouterLink :to="link.path" class="nav-link-mobile" @click="closeMenu">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
}

.header-container {
  display: flex;
  flex-direction: column;
  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
}

/* Top Row */
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  color: var(--color-primary);
}

.logo-text {
  color: var(--color-gray-900);
}

.logo:hover {
  color: var(--color-primary-dark);
}

/* Desktop Navigation */
.nav-desktop {
  display: none;
}

li.nav-item {
  padding: var(--spacing-4);
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-8);
}

.nav-link {
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-600);
  transition: color var(--transition-fast);
  position: relative;
  padding: var(--spacing-3) 0;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.router-link-active {
  color: var(--color-primary);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-gray-800);
  border-radius: var(--radius-full);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.menu-toggle.is-active .menu-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.is-active .menu-bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-active .menu-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Navigation */
.nav-mobile {
  position: fixed;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-white);
  padding: var(--spacing-8);
  transform: translateX(100%);
  transition: transform var(--transition-normal);
}

.nav-mobile.is-open {
  transform: translateX(0);
}

.nav-list-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.nav-link-mobile {
  display: block;
  padding: var(--spacing-3) 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  border-bottom: 1px solid var(--color-gray-100);
}

.nav-link-mobile.router-link-active {
  color: var(--color-primary);
}

/* Desktop Styles */
@media (min-width: 768px) {
  .header-container {
    padding-top: var(--spacing-4);
    padding-bottom: 0;
  }

  .nav-desktop {
    display: block;
    border-top: 1px solid var(--color-gray-100);
    margin-top: var(--spacing-4);
    margin-bottom: var(--spacing-2);
    padding-top: var(--spacing-2);
  }

  .menu-toggle,
  .nav-mobile {
    display: none;
  }
}
</style>
