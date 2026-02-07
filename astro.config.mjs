import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    icon({
      include: {
        // 保留已有的图标集（可选）
        'simple-line-icons': ['*'],
        iconamoon: ['*'],
        mdi: ['*'],
        // 引入全部 proicons 图标（推荐新手使用）
        proicons: ['*'],
        // 若想减小打包体积，可只引入需要的图标，示例：
        // proicons: ['arrow-left', 'check-circle', 'menu'],
      },
    }),
  ],
});