import styles from './ValidatorResult.module.css'

const BannerMessage = () => (
  <p>This feed does not declare the version of the standard it implements so we have inferred that it uses <strong>v1</strong> (which did not require feeds to declare their version).</p>
);

const BannerInstruction = () => (
  <p>To validate against a more recent version of the standard, the root endpoint <code>/</code> should return a value in the <code>version</code> field, for example <code>HSDS-UK-3.0</code>.</p>
);

export const Banner = () => (
  <div className={styles.banner}>
    <BannerMessage />
    <BannerInstruction />
  </div>
);