//import dynamic from 'next/dynamic';
/*import {
	jsonSchemaToDot
} from '@/utilities/jsonSchemaToDot' */
//const Graphviz = dynamic(() => import('graphviz-react'), { ssr: false });

  
/*
export const RenderAPI = ({data}) => {
	const dot = jsonSchemaToDot(data)
return (<div>
<Graphviz dot={dot}
options ={{
	height: 9000,
width: 1028,
zoom: false
 }} />

	<code><pre>{JSON.stringify(data.components.schemas, undefined, 2)}</pre></code>
</div>)

}

*/
import styles from "./RenderAPI.module.css";

const Item = ({name, content}) => <div className={styles.property}>
<dt>{name}</dt>
<dd>{content}</dd>
</div>

// Helper function to render a property
const Property = ({ name, data, references }) => {
  if (typeof data === "string") {
    return (
      <Item name={name} content={data}/>
    );
  }

  if (typeof data === "boolean") {
    return (
		<Item name={name} content={data ? ": true" : ": false"}/>
    );
  }

  // Render array or object
  let content;
  if (Array.isArray(data)) {
    if (typeof data[0] === "object") {
      content = (
        <>
          {data.map((d, i) => (
            <List key={i} data={d} references={references} />
          ))}
        </>
      );
    } else {
      content = data.join(", ");
    }
  } else if (typeof data === "object") {
    content = <List data={data} references={references} />;
  } else {
    content = data;
  }

  return (
    <Item name={name} content={content}/>
  );
};

// Render a reference
const Reference = ({ data, references }) => {
  const referent = data.split("/").slice(-1);
  return (
    <Property
      name={referent}
      data={"(instance)"}
      references={references}
    />
  );
};

// Render a list
const List = ({ data, references }) => (
  <dl>
    {typeof data === "string" ? (
      data
    ) : (
      Object.keys(data).sort().map((k, i) =>
        k === "$ref" ? (
          <Reference key={i} data={data[k]} references={references} />
        ) : (
          <Property
            key={i}
            name={k}
            data={data[k]}
            references={references}
          />
        )
      )
    )}
  </dl>
);

// Render a method
const Method = ({ methodName, data, references }) => (
  <div className={styles.method}>
    <h3>{methodName}</h3>
    <List data={data} references={references} />
  </div>
);

// Render a path
const Path = ({ pathName, data, references }) => (
  <div className={styles.path}>
    <h2>{pathName}</h2>
    {Object.keys(data).sort().map((k) => (
      <Method
        key={k}
        methodName={k}
        data={data[k]}
        references={references}
      />
    ))}
  </div>
);

// Main RenderAPI component
export const RenderAPI = ({ data }) => {
  const paths = data.paths;
  return (
    <div>
      {Object.keys(paths).sort().map((k) => (
        <Path
          key={k}
          pathName={k}
          data={paths[k]}
          references={data.components.schemas}
        />
      ))}
      {/*<code>
        <pre>{JSON.stringify(data.paths, undefined, 2)}</pre>
      </code>*/}
    </div>
  );
};