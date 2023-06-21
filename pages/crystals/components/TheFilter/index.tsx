import Image from "next/image";
import planets from "./planets";
import chakras from "./chakras";
import zodiac from "./zodiac";
import elements from "./elements";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { CrystalsQParams } from "../../../../types";

export default function TheFilter(props: { params: CrystalsQParams }) {
  const router = useRouter();
  const handlerFilter = (filter: string, value: any) => {
    console.table({ filter, value });
    const { query, pathname } = router;
    const pushZodiac = (value?: string) => {
      const { zodiac, ...restQuery } = query;
      let updatedQuery: any = null;
      if (value) {
        updatedQuery = {
          ...restQuery,
          zodiac: value,
          page: "1",
        };
      } else {
        updatedQuery = {
          ...restQuery,
          page: "1",
        };
      }
      router.push({ pathname, query: updatedQuery });
    };
    const pushElements = (value?: string) => {
      const { elements, ...restQuery } = query;
      let updatedQuery: any = null;
      if (value) {
        updatedQuery = {
          ...restQuery,
          elements: value,
          page: "1",
        };
      } else {
        updatedQuery = {
          ...restQuery,
          page: "1",
        };
      }
      router.push({ pathname, query: updatedQuery });
    };
    const pushPlanets = (value?: string) => {
      const { planets, ...restQuery } = query;
      let updatedQuery: any = null;
      if (value) {
        updatedQuery = {
          ...restQuery,
          planets: value,
          page: "1",
        };
      } else {
        updatedQuery = {
          ...restQuery,
          page: "1",
        };
      }
      router.push({ pathname, query: updatedQuery });
    };
    const pushChakras = (value?: string) => {
      const { chakras, ...restQuery } = query;
      let updatedQuery: any = null;
      if (value) {
        updatedQuery = {
          ...restQuery,
          chakras: value,
          page: "1",
        };
      } else {
        updatedQuery = {
          ...restQuery,
          page: "1",
        };
      }
      router.push({ pathname, query: updatedQuery });
    };
    switch (filter) {
      case "zodiac":
        const { zodiac } = query;
        // check if zodiac exist
        if (zodiac) {
          let array = zodiac.toString().split(",");
          // check if value exist, if exist delete it
          if (zodiac.includes(value)) {
            let newArray = array.filter((item) => {
              return item != value;
            });
            // check if zodiac is void to remove it of path
            if (newArray.length == 0) {
              pushZodiac();
            } else {
              pushZodiac(newArray.join(","));
            }
          } else {
            array.push(value.toString());
            pushZodiac(array.join(","));
          }
        } else {
          pushZodiac(value.toString());
        }
        break;
      case "elements":
        const { elements } = query;
        // check if elements exist
        if (elements) {
          let array = elements.toString().split(",");
          // check if value exist, if exist delete it
          if (elements.includes(value)) {
            let newArray = array.filter((item) => {
              return item != value;
            });
            // check if elements is void to remove it of path
            if (newArray.length == 0) {
              pushElements();
            } else {
              pushElements(newArray.join(","));
            }
          } else {
            array.push(value.toString());
            pushElements(array.join(","));
          }
        } else {
          pushElements(value.toString());
        }
        break;
      case "planets":
        const { planets } = query;
        // check if planets exist
        if (planets) {
          let array = planets.toString().split(",");
          // check if value exist, if exist delete it
          if (planets.includes(value)) {
            let newArray = array.filter((item) => {
              return item != value;
            });
            // check if planets is void to remove it of path
            if (newArray.length == 0) {
              pushPlanets();
            } else {
              pushPlanets(newArray.join(","));
            }
          } else {
            array.push(value.toString());
            pushPlanets(array.join(","));
          }
        } else {
          pushPlanets(value.toString());
        }
        break;
      case "chakras":
        const { chakras } = query;
        // check if chakras exist
        if (chakras) {
          let array = chakras.toString().split(",");
          // check if value exist, if exist delete it
          if (chakras.includes(value)) {
            let newArray = array.filter((item) => {
              return item != value;
            });
            // check if chakras is void to remove it of path
            if (newArray.length == 0) {
              pushChakras();
            } else {
              pushChakras(newArray.join(","));
            }
          } else {
            array.push(value.toString());
            pushChakras(array.join(","));
          }
        } else {
          pushChakras(value.toString());
        }
        break;
      default:
        break;
    }
  };

  const zodiacList = zodiac.map((item) => {
    return (
      <li key={item.sign}>
        <input
          type="checkbox"
          name="zodiac"
          id={item.sign}
          onChange={() => handlerFilter("zodiac", item.value)}
          checked={props.params.zodiac?.includes(item.value) || false}
        />
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
        <input
          type="checkbox"
          name="element"
          id={item.name}
          onChange={() => handlerFilter("elements", item.value)}
          checked={props.params.elements?.includes(item.value) || false}
        />
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
        <input
          type="checkbox"
          name="planet"
          id={item.name}
          onChange={() => handlerFilter("planets", item.value)}
          checked={props.params.planets?.includes(item.value) || false}
        />
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
        <input
          type="checkbox"
          name="chakra"
          id={item.name}
          onChange={() => handlerFilter("chakras", item.value)}
          checked={props.params.chakras?.includes(item.value) || false}
        />
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
  );
}
