# PulseForge

PulseForge is a Windows x64 C#/.NET WPF gaming optimizer focused on Fortnite first and universal Windows games second.

## Design philosophy

- Safe by default
- Reversible registry snapshots
- No Python
- No DLL injection
- No game-memory editing
- No anti-cheat modification
- No disabling Microsoft Defender or Windows Update
- Advanced system changes are not part of the one-click safe profile

## Fortnite-first features

- Game Mode
- Background capture reduction
- Safe temp cleanup
- Session-only High process priority
- Epic endpoint latency testing
- Fortnite launcher and config shortcuts
- Universal EXE selection for other games

## Build

GitHub Actions builds a self-contained Windows x64 executable.

The application requests administrator privileges because some Windows settings require elevation.


## PulseForge 2.0 — functional additions

- **System Monitor:** refreshable system report showing Windows version, computer name, logical processor count, system-drive free/total capacity, and PulseForge process memory. Export reports to `Documents\\PulseForge Reports`.
- **Persistent Game Library:** add Windows game `.exe` paths, save the library locally under `%LOCALAPPDATA%\\PulseForge\\games.json`, launch selected games, and remove entries.
- Existing safety snapshot, optimization, Fortnite, and network test pages remain part of the application.

The System Monitor intentionally does not claim unsupported live GPU/CPU telemetry or estimate FPS. A successful GitHub Actions Windows build is still required before distributing this source as an EXE.
