import React from "react";
import ProfileHeader from "./../components/profile/ProfileHeader";
import ProgressCard from "./../components/profile/ProgressCard";
import EntriesCalendar from "./../components/profile/EntriesCalendar";
import JournalStats from "./../components/profile/JournalStats";
import QuoteCard from "./../components/profile/QuoteCard";
import MoodAnalytics from "./../components/profile/MoodAnalytics";
import SignInForms3 from "../components/auth/SignInForms3";
import ProtectedRoute from "../components/auth/ProtectedRoute";

export default function ProfileScreen() {
  return (
    <ProtectedRoute>
      <div className="bg-gray-50 min-h-screen pb-20">
        <ProfileHeader />
        <div className="px-4">
          <ProgressCard />
          <EntriesCalendar />
          <JournalStats />
          <QuoteCard />
          <MoodAnalytics />
        </div>
      </div>
    </ProtectedRoute>
  );
}
