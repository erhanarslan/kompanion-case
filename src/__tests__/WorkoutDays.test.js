import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkoutDays from '../components/WorkoutDays/WorkoutDays';
import { RegisterProvider } from '../../context/useRegisterContext';

describe('WorkoutDays Component', () => {
  const renderWithProvider = (weight, height) => {
    return render(
      <RegisterProvider initialRegisterData={{ weight, height, workoutDays: [] }}>
        <WorkoutDays />
      </RegisterProvider>
    );
  };

  it('should show all days if weight/height <= 0.5', () => {
    renderWithProvider(50, 120); // weight/height = 50 / 120 = 0.416

    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    days.forEach(day => {
      expect(screen.getByText(new RegExp(day, 'i')).closest('button')).not.toBeDisabled();
    });
  });

  it('should show only specific days if weight/height > 0.5', () => {
    renderWithProvider(70, 120); // weight/height = 70 / 120 = 0.583

    const selectableDays = ["monday", "wednesday", "saturday", "sunday"];
    const nonSelectableDays = ["tuesday", "thursday", "friday"];

    selectableDays.forEach(day => {
      expect(screen.getByText(new RegExp(day, 'i')).closest('button')).not.toBeDisabled();
    });

    nonSelectableDays.forEach(day => {
      expect(screen.getByText(new RegExp(day, 'i')).closest('button')).toBeDisabled();
    });
  });
});
