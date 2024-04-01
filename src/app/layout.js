import { Nunito } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import CurrentWeahter from "@/components/Forecast/CurrentWeather/CurrentWeahter";
// import WeatherDetails from "@/components/Forecast/WeatherDetails/WeatherDetails";
// import Forecast from "@/components/Forecast/Forecast";
import { WeatherProvider } from "@/context/WeatherContext";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Iweather",
  description: ":)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-custom-background">
      <body className={inter.className}>

        <div>
          <WeatherProvider>
          <ToastContainer position="top-center" autoClose={5000} />

            {children}
          </WeatherProvider>

        </div>
      </body>
    </html>
  );
}
