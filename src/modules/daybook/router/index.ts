/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export default {
  name: "DayBook",
  component: () =>
    import(
      /* webpaclChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () =>
      import(
        /* webpackChunkName: "daybook-no-entry" */ "@/modules/daybook/views/NoEntrySelected.vue"
      ),
    },
    {
      path: '/entry-view',
      name: 'entry-view',
      component: () =>
      import(
        /* webpackChunkName: "dayboock-entry-view" */ "@/modules/daybook/views/EntryView.vue"
      )
    }
  ]
};
