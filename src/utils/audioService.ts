export class AudioService {
  private static isEnabled = true;

  private static createOscillator(frequency: number, duration: number) {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  }

  static toggleAudio() {
    this.isEnabled = !this.isEnabled;
    return this.isEnabled;
  }

  static isAudioEnabled() {
    return this.isEnabled;
  }

  static playClick() {
    if (!this.isEnabled) return;
    try {
      this.createOscillator(800, 0.05);
    } catch (e) {
      console.log('Audio not available');
    }
  }

  static playHover() {
    if (!this.isEnabled) return;
    try {
      this.createOscillator(600, 0.03);
    } catch (e) {
      console.log('Audio not available');
    }
  }

  static playWhoosh() {
    if (!this.isEnabled) return;
    try {
      this.createOscillator(1200, 0.08);
    } catch (e) {
      console.log('Audio not available');
    }
  }

  static playSuccess() {
    if (!this.isEnabled) return;
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const notes = [800, 1000, 1200];
      notes.forEach((freq, i) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, audioContext.currentTime + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.05 + 0.1);
        osc.start(audioContext.currentTime + i * 0.05);
        osc.stop(audioContext.currentTime + i * 0.05 + 0.1);
      });
    } catch (e) {
      console.log('Audio not available');
    }
  }
}
