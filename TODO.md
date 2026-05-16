## TODO - Theme Toggle Refactor

- [x] Refactor `TopBar` theme initialization in `resources/js/Components/Sidebar.jsx` to read saved theme synchronously on first render and apply the `dark` class immediately.
- [x] Keep existing click-to-toggle behavior and `localStorage` persistence.
- [ ] Quick manual test: open app, verify icon state matches theme immediately, click toggle, refresh and verify persistence.
