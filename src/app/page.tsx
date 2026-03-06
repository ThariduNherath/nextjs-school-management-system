// app/page.tsx or app/home/page.tsx
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";
import { announcementsData, eventsData, calendarEvents } from "@/lib/data";
import { CalendarDays, GraduationCap, Users, BookOpen, Trophy, Bell, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  // Get current date for filtering
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Filter upcoming events (events after current date)
  const upcomingEvents = eventsData
    .filter(event => event.date >= currentDate)
    .slice(0, 3)
    .map(event => ({
      id: event.id,
      title: event.title,
      date: new Date(event.date).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      }),
      time: `${event.startTime} - ${event.endTime}`,
      class: event.class
    }));

  // Get recent announcements
  const recentAnnouncements = announcementsData
    .slice(0, 3)
    .map(announcement => ({
      id: announcement.id,
      title: announcement.title,
      class: announcement.class,
      date: new Date(announcement.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    }));

  return (
    <div className="p-6 space-y-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome to <span className="text-yellow-300">SchoolMaster</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Empowering education through innovative learning management. Track progress, manage classes, and achieve academic excellence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/admin" 
                className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:scale-105 flex items-center gap-2"
              >
                Go to Dashboard
                <ArrowRight size={18} />
              </Link>
              <Link 
                href="/about" 
                className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="SchooLama Logo" 
              width={180} 
              height={180}
              className="drop-shadow-2xl opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { 
            icon: Users, 
            label: "Total Students", 
            value: "1,234", 
            change: "+8%", 
            color: "bg-blue-500" 
          },
          { 
            icon: GraduationCap, 
            label: "Total Teachers", 
            value: "86", 
            change: "+5%", 
            color: "bg-green-500" 
          },
          { 
            icon: BookOpen, 
            label: "Active Classes", 
            value: "24", 
            change: "+3%", 
            color: "bg-purple-500" 
          },
          { 
            icon: Trophy, 
            label: "Events This Month", 
            value: eventsData.length.toString(), 
            change: "+2", 
            color: "bg-yellow-500" 
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full ${stat.color} opacity-10 transition-all group-hover:scale-110`} />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs text-green-500 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`rounded-full ${stat.color} p-3 text-white`}>
                <stat.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Calendar and Announcements */}
        <div className="lg:col-span-2 space-y-6">
          {/* Calendar Card */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <CalendarDays className="text-blue-500" size={24} />
                Weekly Schedule
              </h2>
              <Link href="/calendar" className="text-sm text-blue-500 hover:underline">
                Full Calendar →
              </Link>
            </div>
            <div className="h-[500px]">
              <BigCalendar />
            </div>
          </div>

          {/* Recent Announcements */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bell className="text-purple-500" size={24} />
                Latest Announcements
              </h2>
              <Link href="/announcements" className="text-sm text-blue-500 hover:underline">
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              {recentAnnouncements.map((announcement) => (
                <div 
                  key={announcement.id}
                  className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{announcement.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">Class {announcement.class}</p>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                      <Clock size={12} />
                      {announcement.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Events */}
        <div className="space-y-6">
          {/* Event Calendar */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <EventCalendar events={eventsData} />
          </div>

          {/* Upcoming Events List */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CalendarDays size={20} className="text-blue-500" />
              Upcoming Events
            </h3>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex flex-col items-center justify-center text-blue-600 font-bold">
                      <span className="text-xs">{event.date.split(' ')[0]}</span>
                      <span className="text-sm">{event.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 group-hover:text-blue-600">
                        {event.title}
                      </h4>
                      <p className="text-xs text-gray-500">{event.time}</p>
                      <p className="text-xs text-gray-400">Class {event.class}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No upcoming events</p>
            )}
            <Link 
              href="/events" 
              className="block text-center text-sm text-blue-500 hover:underline mt-4 pt-2 border-t border-gray-100"
            >
              View All Events
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-lg text-white">
            <h3 className="text-lg font-semibold mb-3">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Total Events</span>
                <span className="font-bold">{eventsData.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Announcements</span>
                <span className="font-bold">{announcementsData.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Active Classes</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span>This Month's Events</span>
                <span className="font-bold">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-8 rounded-xl bg-white p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <h4 className="font-bold text-lg">SchooLama</h4>
            </div>
            <p className="text-sm text-gray-600">
              Modern education management system for schools and institutions.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
              <li><Link href="/calendar" className="hover:text-blue-500">Calendar</Link></li>
              <li><Link href="/announcements" className="hover:text-blue-500">Announcements</Link></li>
              <li><Link href="/events" className="hover:text-blue-500">Events</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Resources</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-blue-500">Help Center</Link></li>
              <li><Link href="#" className="hover:text-blue-500">Documentation</Link></li>
              <li><Link href="#" className="hover:text-blue-500">API Reference</Link></li>
              <li><Link href="#" className="hover:text-blue-500">Guides</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Support</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-blue-500">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-blue-500">FAQs</Link></li>
              <li><Link href="#" className="hover:text-blue-500">Report Issue</Link></li>
              <li><Link href="#" className="hover:text-blue-500">Feedback</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
          © 2026 SchooLama. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;