import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Cold from '@mui/icons-material/AcUnit';
import Rain from '@mui/icons-material/Thunderstorm';
import Hot from '@mui/icons-material/Flare';
import "./InfoBox.css";
 
export default function InfoBox({Info}){
    let Initial_img="https://images.unsplash.com/photo-1707931171471-a73f479a5a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
    let Hot_Url="https://media.istockphoto.com/id/1173256978/photo/heat-wave-in-the-house-thermometer-shows-in-summer.jpg?s=2048x2048&w=is&k=20&c=HHTs87NW3a6kvSPuBkwj9usYZq33oe7Tv9HKsVRaBFs=";
    let Cold_Url="https://images.unsplash.com/photo-1581621111812-8cc7d4a36e03?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Rain_Url="https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMGRheXxlbnwwfHwwfHx8MA%3D%3D"

    return(
        <div className='cardInfo'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity>60? Rain_Url: Info.tem>15? Hot_Url:Cold_Url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {Info.City}{
         Info.humidity>60? <Rain/>: Info.tem>15? <Hot/>:<Cold/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        the general condition of the atmosphere at a particular time and place, with regard to the temperature, moisture, cloudiness, etc.
        <h3>
            {Info.humidity}
        </h3>
        <h3>{Info.temp}&deg;C
        </h3>
        </Typography>
      </CardContent>
    
    </Card>
        </div>
    );
}