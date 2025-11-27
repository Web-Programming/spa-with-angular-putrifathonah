import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+62 812-3456-7890',
    location: 'Jakarta, Indonesia',
    avatar:
      'https://ui-avatars.com/api/?name=John+Doe&size=150&background=667eea&color=fff&bold=true',
    isPremium: true,
    isVerified: true,
    memberSince: 'Jan 2024',
    bio: 'Seorang profesional yang mencari properti berkualitas...',
    job: 'Software Developer',
    birthdate: '15 Januari 1990',
    status: 'Married',
  };

  stats = {
    properties: 3,
    favorites: 12,
    rating: 4.8,
  };

  socialLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  };

  properties = [
    {
      id: 1,
      title: 'Modern Apartment',
      location: 'Jakarta Selatan',
      price: 5000000,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
      bedrooms: 2,
      bathrooms: 1,
      area: 45,
      status: 'Active',
    },
    // ... more properties
  ];

  favorites = [
    {
      id: 101,
      title: 'Beautiful Villa',
      location: 'Bali, Indonesia',
      price: 20000000,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop',
      bedrooms: 5,
      bathrooms: 4,
      area: 200,
      rating: 4.9,
    },
    // ... favorite properties
  ];

  history = [
    {
      icon: 'bi-check-circle-fill',
      iconColor: 'success',
      title: 'Pembayaran Berhasil',
      description: 'Modern Apartment - November 2024',
      time: '2 hari yang lalu',
      badge: 'Rp 5.000.000',
      badgeColor: 'success',
    },
    // ... more history items
  ];

  onEditProfile() {
    console.log('Edit profile clicked');
    // Navigate to edit profile page
  }

  onSettings() {
    console.log('Settings clicked');
    // Navigate to settings page
  }

  onEditProperty(propertyId: number) {
    console.log('Edit property:', propertyId);
    // Navigate to edit property page
  }

  onDeleteProperty(propertyId: number) {
    if (confirm('Yakin ingin menghapus properti ini?')) {
      this.properties = this.properties.filter((p) => p.id !== propertyId);
      console.log('Property deleted:', propertyId);
    }
  }
}
