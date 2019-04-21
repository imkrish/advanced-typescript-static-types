const person = {
  fullName: "Full Name",
  blog: "blog",
  twitter: "@keerati"
};

const { fullName, ...socialMedia } = person;

const defaultStyles = {
  fontFamily: "Arial",
  fontWeight: "normal"
};

const userStyles = {
  color: "#1111",
  fontWeight: 400
};

const styles = { ...userStyles, ...defaultStyles };

const { color, ...remainingProps } = styles;

const todo = {
  text: "Mow the lawn",
  completed: false,
  tags: ["garden"]
};

const shallowCopy = { ...todo, tags: [...todo.tags] };
shallowCopy.text = "Buy Milk";
shallowCopy.tags.push("yo");
console.log(shallowCopy);
console.log(todo);
