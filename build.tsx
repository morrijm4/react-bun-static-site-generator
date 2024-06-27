import { mkdir, rm, readdir } from 'fs/promises';
import { renderToStaticMarkup } from 'react-dom/server';
import { Head } from './src/components/head';
import { Layout } from './src/components/layout';

const outDir = './dist';
const pagesDir = './src/pages';

await rm(outDir, { recursive: true });
await mkdir(outDir);

const dirs = await readdir(pagesDir);

await Promise.all(
  dirs.map(async (dir) => {
    const { default: Page } = await import(`${pagesDir}/${dir}/+page.tsx`);

    const html = renderToStaticMarkup(
      <>
        <Head>
          <Layout>
            <Page />
          </Layout>
        </Head>
      </>
    );

    await Bun.write(`${outDir}/${dir}.html`, `<!DOCTYPE html>${html}`);
  })
);
