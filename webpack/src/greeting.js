export const greeting = "Hello World";
import xddImg from "../assets/xdd.png";
import schnitzel from "../assets/schnitzel.jpg";
import burger from "../assets/burger.jpg";
import pizza from "../assets/pizza.jpg";

const HomeBtn = document.querySelector("#home");
const MenuBtn = document.querySelector("#menu");
const AboutBtn = document.querySelector("#about");

const Content = document.querySelector("#content");

function CreateHome() {
  DisableButtonActive();
  HomeBtn.id = "active";
  Content.innerHTML = "";
  const Container = document.createElement("div");
  Container.id = "cont";
  const Newh1 = document.createElement("h1");
  Newh1.textContent = "Welcome to Our beutiful resurant";
  const NewImg = document.createElement("img");
  NewImg.src = xddImg;
  NewImg.alt = "Our Amazing Dishes";
  NewImg.id = "xdd";
  const NewP = document.createElement("p");
  NewP.id = "hometext";
  NewP.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Pellentesque eleifend nisi ut sodales viverra. Morbi pellentesque porttitor justo a efficitur.
    Curabitur aliquam turpis in tellus lobortis, sed molestie est condimentum.
    Sed vitae magna nec dui varius placerat ut id mauris.
    Maecenas vitae quam eget odio pretium molestie.
    Vivamus congue aliquet sollicitudin. Suspendisse at commodo ante. 
    Mauris lacinia nisl pulvinar, lacinia nunc eu, tempor ex. 
    Sed vel velit orci. Sed laoreet erat nec elit dictum faucibus. Nulla facilisi. 
    Duis eget vehicula metus. Suspendisse pulvinar egestas ante, vitae euismod nisl molestie et. 
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Maecenas posuere pharetra lacus sed tincidunt. Fusce suscipit gravida risus quis pretium. 
    Integer ac iaculis ipsum, a finibus eros. Morbi massa orci, scelerisque at dignissim quis, iaculis ac lectus. 
    Nulla tortor est, convallis a iaculis quis, congue vel mi. Phasellus vitae risus nisl. 
    Sed convallis quam in tortor maximus dapibus. Pellentesque luctus commodo sagittis.`;
    const List = document.createElement("ul");
    List.id = "homelist";
    const element1 = document.createElement("li");
    element1.textContent = "Sunday - Thursday : 8am - 8pm";
    const element2 = document.createElement("li");
    element2.textContent = "Friday : 8am - 3pm";
    const element3 = document.createElement("li");
    element3.textContent = "Saturday : 6pm - 11pm";
  Content.appendChild(Container);
  Container.appendChild(Newh1);
  Container.appendChild(NewImg);
  Container.appendChild(NewP);
  Container.appendChild(List);
  List.appendChild(element1);
  List.appendChild(element2);
  List.appendChild(element3);
}
function CreateMenu() {
  DisableButtonActive();
  MenuBtn.id = "active";
  Content.innerHTML = "";
  const Container = document.createElement("div");
  Container.id = "cont";
  const Newh1 = document.createElement("h1");
  Newh1.textContent = "Our Dishes: ";
  Content.appendChild(Container);
  Container.appendChild(Newh1);
  CreateDishTemp(
    "Schnitzel",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Pellentesque eleifend nisi ut sodales viverraLorem ipsum dolor sit amet, consectetur adipiscing elit.
   Pellentesque eleifend nisi ut sodales viverra`,
    schnitzel,
    Container
  );
  CreateDishTemp(
    "Hamburger",
    `A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat,
    typically beef—placed inside a sliced bun or bread roll. The patties are often served with cheese,
    lettuce, tomato, onion, pickles, bacon.`,
    burger,
    Container
  );
  CreateDishTemp(
    "Pizza",
    `Pizza is an Italian dish typically consisting of a flat base of leavened 
    wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, 
    traditionally in a wood-fired oven.`,
    pizza,
    Container
  );
}
function CreateDishTemp(name, description, img, Container) {
  const DishTemp = document.createElement("div");
  DishTemp.id = "Dishtemp";
  const DishHead = document.createElement("h2");
  DishHead.id = "Dishhead";
  DishHead.textContent = name;
  DishTemp.appendChild(DishHead);
  const DishCont = document.createElement("div");
  DishCont.id = "Dishcont";
  const DishText = document.createElement("p");
  DishTemp.style.border = "5px solid Red";
  DishText.id = "Dishtext";
  DishText.textContent = description;
  const DishImg = document.createElement("img");
  DishImg.src = img;
  DishImg.id = "Dishimg";

  DishCont.appendChild(DishText);
  DishCont.appendChild(DishImg);

  DishTemp.appendChild(DishHead);
  DishTemp.appendChild(DishCont);

  Container.appendChild(DishTemp);
}

function CreateAbout() {
  DisableButtonActive();
  AboutBtn.id = "active";
  Content.innerHTML = "";
  const Container = document.createElement("div");
  Container.id = "cont";
  const AboutHead = document.createElement("h1");
  AboutHead.textContent = "About Us:";
  const mainDiv = document.createElement("div");
  const DivText = document.createElement("p");
  DivText.id = "abouttext";
  DivText.textContent = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus nunc quis leo accumsan, vel volutpat mauris facilisis. Etiam posuere congue risus, at faucibus mauris molestie vitae. Quisque laoreet sapien vestibulum ante volutpat, tempor scelerisque sapien fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean risus risus, interdum a diam id, hendrerit gravida tortor. Pellentesque varius tristique purus, et convallis erat. Mauris ullamcorper tortor in blandit egestas. Nullam ut nunc enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque accumsan bibendum elit quis ornare. Phasellus suscipit orci a ex volutpat, nec scelerisque mi bibendum. Suspendisse nec tellus id mi hendrerit vestibulum eu quis nunc. Curabitur non malesuada velit, a tempor dolor. Vivamus accumsan nibh quis cursus auctor.

Maecenas a ornare ante. Mauris molestie consequat nisi, sed lacinia dui vestibulum sed. Nulla in turpis nec elit suscipit suscipit at et tellus. Duis convallis tortor accumsan mi finibus, vel pretium enim porta. Nullam accumsan, enim ac placerat commodo, neque sem efficitur purus, at ullamcorper tellus massa tristique justo. Curabitur eget vehicula odio. Donec a velit eu justo euismod vestibulum et et dolor.

In accumsan pretium sagittis. In eget semper odio. Donec et facilisis enim. Duis sapien orci, pharetra at finibus nec, consequat quis sapien. In nibh erat, lacinia a ipsum eget, iaculis convallis augue. Pellentesque ac lacus non elit luctus venenatis. Aliquam quis luctus lacus, sed ornare augue. Morbi finibus non nibh fermentum tristique. Mauris facilisis, mi sed venenatis fringilla, augue neque euismod lacus, at tincidunt neque eros nec eros. Sed egestas nibh sed risus posuere hendrerit. Aenean sed odio eget purus vehicula dapibus hendrerit et odio. `;

  Content.appendChild(Container);
  Container.appendChild(AboutHead);
  Container.appendChild(mainDiv);
  mainDiv.appendChild(DivText);
}

function DisableButtonActive() {
  HomeBtn.id = "";
  MenuBtn.id = "";
  AboutBtn.id = "";
}

export function EventListeners() {
  HomeBtn.addEventListener("click", CreateHome);
  MenuBtn.addEventListener("click", CreateMenu);
  const AboutBtn = document.querySelector("#about");
  AboutBtn.addEventListener("click", CreateAbout);
}
