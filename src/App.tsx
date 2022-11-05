import "./App.css";
import Card from "./ui/Card/Card";
import Grid from "./ui/Grid";

function App() {
  return (
    <div className="App">
      <Grid.Base>
        <Grid.Row>
          <Grid.Column col={12} md={4}>
            <Card
              title="Asd"
              image="https://via.placeholder.com/600x400?text=16:9"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ligula ac nunc varius consectetur."
              priceDescription="Room starting at"
              price={106}
              link="https://www.google.com"
            />
          </Grid.Column>
          <Grid.Column col={6} md={2}>
            <Card
              title="Asd"
              image="https://via.placeholder.com/600x400?text=16:9"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ligula ac nunc varius consectetur."
              priceDescription="Room starting at"
              price={106}
              link="https://www.google.com"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column col={6} md={2}>
            <Card
              title="Asd"
              image="https://via.placeholder.com/600x400?text=16:9"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ligula ac nunc varius consectetur."
              priceDescription="Room starting at"
              price={106}
              link="https://www.google.com"
            />
          </Grid.Column>
          <Grid.Column col={6} md={2}>
            <Card
              title="Asd"
              image="https://via.placeholder.com/600x400?text=16:9"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ligula ac nunc varius consectetur."
              priceDescription="Room starting at"
              price={106}
              link="https://www.google.com"
            />
          </Grid.Column>
          <Grid.Column col={6} md={2}>
            <Card
              title="Asd"
              image="https://via.placeholder.com/600x400?text=16:9"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ligula ac nunc varius consectetur."
              priceDescription="Room starting at"
              price={106}
              link="https://www.google.com"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column sm={3} md={3}>
            <Card>
              <div>custom content</div>
            </Card>
          </Grid.Column>
          <Grid.Column sm={3} md={3}>
            <Card>
              <div>custom content</div>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid.Base>
    </div>
  );
}

export default App;
