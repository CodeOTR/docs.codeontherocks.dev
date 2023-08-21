import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Flutter First',
    Svg: require('@site/static/img/flutter.svg').default,
    description: (
      <>
        This library was designed to help you learn Flutter and Dart, not a specific library.
      </>
    ),
  },
  {
    title: 'MVVM with InheritedWidgets',
    Svg: require('@site/static/img/widgets.svg').default,
    description: (
      <>
        This library provides a simple way to implement MVVM with InheritedWidgets. Stay close to Flutter's core.
      </>
    ),
  },
  {
    title: 'Small Footprint',
    Svg: require('@site/static/img/footprint.svg').default,
    description: (
      <>
        The entirety of this library is less than 100 lines of code. If you want, just copy and paste it into your project.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
