import { Nunito } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header/Header";
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
            {children}
          </WeatherProvider>

        </div>
      </body>
    </html>
  );
}
