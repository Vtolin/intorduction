document.addEventListener('DOMContentLoaded', () => {
    const profileSection = document.querySelector('.profile-section')
    const profilePic = document.querySelector('.profile-pic')
    const profileName = document.querySelector('.profile-name')
    const aboutSection = document.querySelector('.about-section')
    const purposeBtn = document.querySelector('.purpose-btn')
    const controlPanel = document.getElementById('controlPanel')
    const togglePanelBtn = document.querySelector('.toggle-panel-btn')

    // Start with the elements hidden
    profileSection.classList.remove('visible')
    profilePic.classList.remove('visible')
    profileName.classList.remove('visible')
    aboutSection.classList.remove('expanded')
    purposeBtn.textContent = 'Show Purpose'

    // Event listener for the Purpose button
    purposeBtn.addEventListener('click', togglePurpose)

    // Event listener for the control panel toggle button
    togglePanelBtn.addEventListener('click', toggleControlPanel)
});

function togglePurpose() {
    const profileSection = document.querySelector('.profile-section')
    const profilePic = document.querySelector('.profile-pic')
    const profileName = document.querySelector('.profile-name')
    const aboutSection = document.querySelector('.about-section')
    const purposeBtn = document.querySelector('.purpose-btn')

    // Toggle visibility for profile section and about section
    const isVisible = profileSection.classList.contains('visible')

    // Toggle visibility and expand/collapse sections
    profileSection.classList.toggle('visible', !isVisible)
    profilePic.classList.toggle('visible', !isVisible)
    profileName.classList.toggle('visible', !isVisible)
    aboutSection.classList.toggle('expanded', !isVisible)

    // Update the button text
    purposeBtn.textContent = isVisible ? 'Show Purpose' : 'Hide Purpose'
}

function toggleControlPanel() {
    const controlPanel = document.getElementById('controlPanel')
    controlPanel.classList.toggle('open');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section')
    sections.forEach(section => section.classList.remove('active'))

    const selectedSection = document.getElementById(sectionId)
    if (selectedSection) {
        selectedSection.classList.add('active')
    }
}
