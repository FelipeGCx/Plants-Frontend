import Image from "next/image";
import planets from "./planets";
import chakras from "./chakras";
import zodiac from "./zodiac";
import elements from "./elements";
import styles from "./style.module.scss";

const zodiacList = zodiac.map((item) => {
    return (
        <li key={item.sign}>
            <input type="checkbox" name="zodiac" id={item.sign} />
            <Image
                className="icon"
                src={item.icon}
                alt={item.alt}
                width={20}
                height={20}
            />
        </li>
    );
});

const elementsList = elements.map((item) => {
    return (
        <li key={item.name}>
            <input type="checkbox" name="element" id={item.name} />
            <Image
                className="icon"
                src={item.icon}
                alt={item.alt}
                width={20}
                height={20}
            />
        </li>
    );
});

const planetsList = planets.map((item) => {
    return (
        <li key={item.name}>
            <input type="checkbox" name="planet" id={item.name} />
            <Image
                className="icon"
                src={item.icon}
                alt={item.alt}
                width={20}
                height={20}
            />
        </li>
    );
});
const chakrasList = chakras.map((item) => {
    return (
        <li key={item.name}>
            <input type="checkbox" name="chakra" id={item.name} />
            <Image
                className="icon"
                src={item.icon}
                alt={item.alt}
                width={20}
                height={20}
            />
        </li>
    );
});


export default function TheFilter() {
    return (
        <section className={styles.filter}>
            <form>
                <div>
                    <h2>zodiaco</h2>
                    <ul>{zodiacList}</ul>
                </div>
                <div>
                    <h2>elemento</h2>
                    <ul>{elementsList}</ul>
                </div>
                <div>
                    <h2>planeta</h2>
                    <ul>{planetsList}</ul>
                </div>
                <div>
                    <h2>chakras</h2>
                    <ul>{chakrasList}</ul>
                </div>
            </form>
        </section>
    )
}