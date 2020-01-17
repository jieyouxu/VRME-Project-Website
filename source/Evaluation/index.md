---
title: Evaluation
date: 2020-01-14 17:02:31
---

# Evaluation

## Achievements

### Summary of achievements

1. Built VR Meeting environment model using unity.
    - round table theme implemented.
    - Presenter Avatar:
        - Standing avatar located at the centre.
        - Oculus Go camera oject attached to presenter, allowing for 360 degrees field of vision.
        - Single arm raising gesture created.
    - Listener Avatar:
        - Fixed positions allocated evenly across the round table.
        - Oculus Go camera object attached to each listener, allowing for 360 degrees field of vision.
        - Single arm raising gesture created.

2. Oculus Go device setup.
    - Oculus is classified as an Android application, unity model built as an Android Package (APK)
    - Using Android Debugging Bridge (ADB), we can deploy our unity model to Oculus Go
    - Real time voice communication, resolved by using Oculus Go's inbuilt 'party' application.

3. Back-end Server for connection between attendees.
    - Signaling.
    - Meeting session management.
        - Initiate meeting session, the initialiser automatically becomes the presenter.
        - Other attendees may join the meeting, seating arrangement determined by the server.
        - Presenter and Listeners may leave the meeting.
    - External API adaptor.
        - Oculus Platform API.
    - Uses TCP and HTTP protocols to handle user requests


Individual contribution:


### Critical Evaluation of the Project

User interface / user experience

- 
Functionality
Stability
Efficiency
Compatibility
Maintainability
Project management
Pending