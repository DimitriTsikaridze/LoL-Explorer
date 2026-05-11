import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'champions/:id',
    renderMode: RenderMode.Client,
  },

  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
