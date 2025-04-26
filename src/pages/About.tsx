const About = () => {
    return (
        <p className="about text-[#ffcf94] font-cinzel p-4 md:relative left-32 max-w-screen-sm h-full m-auto flex flex-col items-center">
            This project is made in react framework using typescript with the help of vite bundler the main key technologies are HTML, CSS, Tailwind CSS, javascript, Typescript, React.ty. I have also tried zustand in this project but removed it since it doesnt make any sence for using like a useState in useContext so its better to keep it simple.
            <br />
            <br />
            this version still have some issues like the end quiz button gets hide when a bigger question come but i havent touched it since its just a small project to learn something new.
        </p>
    );
}

export default About;