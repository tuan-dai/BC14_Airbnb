import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/HomeTemplate/Home/Home';
import ListRoom from './pages/HomeTemplate/Room Management/List Room/ListRoom';

import { AdminTemplate } from './templates/AdminTemplate';
import UserManagement from './pages/AdminTemplate/User_Management/UserManagement';
import AddUser from './pages/AdminTemplate/User_Management/AddUser';
import EditUser from './pages/AdminTemplate/User_Management/EditUser';
import RoomDetail from './pages/HomeTemplate/Room Management/Room Detail/RoomDetail';

import UserInfo from './pages/HomeTemplate/User Identification/UserInfo';
import LocationManagement from './pages/AdminTemplate/Location_Management/LocationManagement';
import CreateLocation from './pages/AdminTemplate/Location_Management/CreateLocation';
import UpdateLocation from './pages/AdminTemplate/Location_Management/UpdateLocation';
import RoomManagement from './pages/AdminTemplate/Room_Management/RoomManagement';
import CreateRoom from './pages/AdminTemplate/Room_Management/CreateRoom';
import UpdateRoom from './pages/AdminTemplate/Room_Management/UpdateRoom';
import ReviewManagenement from './pages/AdminTemplate/Review_Management/ReviewManagenement';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/homes/:locationId' exact Component={ListRoom} />
        <HomeTemplate path='/rooms/:id' exact Component={RoomDetail} />
        <HomeTemplate path='/info/:id' exact Component={UserInfo} />

        <AdminTemplate path='/admin/user-management' exact Component={UserManagement} />
        <AdminTemplate path='/admin/user-management/adduser' exact Component={AddUser} />
        <AdminTemplate path='/admin/user-management/edituser/:id' exact Component={EditUser} />
        <AdminTemplate path='/admin/location-management' exact Component={LocationManagement} />
        <AdminTemplate path='/admin/location-management/create-location' exact Component={CreateLocation} />
        <AdminTemplate path='/admin/location-management/update-location/:locationId' exact Component={UpdateLocation} />
        <AdminTemplate path='/admin/room-management/:locationId' exact Component={RoomManagement} />
        <AdminTemplate path='/admin/room-management/create-room/:locationId' exact Component={CreateRoom} />
        <AdminTemplate path='/admin/room-management/update-room/:roomId' Component={UpdateRoom} />
        <AdminTemplate path='/admin/review-management/:roomId' exact Component={ReviewManagenement} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
