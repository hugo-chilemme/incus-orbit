import * as containers from "./incus/containers.js";
import * as config from "./incus/config.js";
import * as profiles from "./incus/profiles.js";
import * as images from "./incus/images.js";
import * as networks from "./incus/networks.js";
import * as storage from "./incus/storage.js";
import * as volumes from "./incus/volumes.js";
import * as snapshots from "./incus/snapshots.js";

export default {
	containers: containers,
	config: config,
	profiles: profiles,
	images: images,
	networks: networks,
	storage: storage,
	volumes: volumes,
	snapshots: snapshots,
};
