export default function() {
	return this.image ? this.image.toDataURL(`image/${this.imageFormat}`, this.encoderOptions) : null;
}
