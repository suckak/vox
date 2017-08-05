Front End Voxfeed Test
===

####Stack
ReactJS + Redux app, Webpack como module bundler, ES6.

Animaciones y transiciones con pure CSS3

#### Online Deploy
https://voxfeed-test.herokuapp.com/

#### Run local

> git clone https://github.com/suckak/vox.git
> cd vox
> opcional:
    Si quieres correr el proyecto y hacerlo accesible a toda la red local,
    cambiar en el package.json el script de start por:
     "start": "webpack-dev-server --inline --port 8080 --host { ip de la maquina host} --content-base ."
     asi ser? accesible desde http://{ip host}:8080
     de lo contrario solo correra en la maquina host en http://localhost:8080
> npm install
> npm start


#### Librearias
http://tasti.github.io/react-linkify/
http://recharts.org/

#### Boilerplate
https://github.com/StephenGrider/ReduxSimpleStarter