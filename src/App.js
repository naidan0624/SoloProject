import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { WebsiteHeader } from "./A-first- project/home";
import HomePage from "./A-first- project/home";
import ServiceComponent from "./A-first- project/services";
import OnlineBooking from "./A-first- project/onlinebooking";
import LocalStorage from "./localSotrage";
import AdminCalendar from "./A-first- project/admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to='/websites'/>} /> 
          <Route path="/websites" element={<WebsiteHeader />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServiceComponent />} />
            <Route path="booking" element={<AdminCalendar />} />
            <Route path="onlinebooking" element={<OnlineBooking />} />
            <Route path="storage" element={<LocalStorage />} />
          </Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}
export default App;
