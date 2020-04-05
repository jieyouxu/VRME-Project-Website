import React from "react";

import { CardBody } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const BackendDesign = () => (
	<ContentCard>
		<ContentCardHeader title="Backend Design" className="theme-c-l-blue" />
		<CardBody>
			<p>
				For the backend, we implemented an <b>asynchronous</b> web server. Each
				response spawns a new async task. The server is also multi-threaded with
				the number of threads defaulting to the number of logical CPU cores.
			</p>
			<p>
				The server allocates and maintains two thread pools – one thread pool is
				used explicitly for handling requests (i.e. basic API endpoint
				handling), while the other thread pool is used for handling
				heavy-lifting (let this be the P2 thread pool).
			</p>
			<p>
				All API endpoint handlers are asynchronous and non-blocking. If there
				are blocking I/O tasks (such as filesystem operations), they are
				delegated to P2 thread pool by the async task scheduler.
			</p>
			<p>
				The server also maintains a database connection pool to the backing
				PostgreSQL database. Reusing connections can eliminate the overhead of
				repetitively establishing and destroying connections to the database.
			</p>
			<p>
				We benefitted vastly from Rust&apos;s strong type system and
				memory-safety guarantees from its owernship and lifetimes
				memory-coherence type system features. This allows us to perform tasks
				asynchronously and be multi-threaded fearlessly as the compiler is able
				to catch a significant portion of concurrency bugs at compile-time
				provided the `unsafe` &quot;escape hatch&quot; is not misused.
			</p>
		</CardBody>
	</ContentCard>
);

export default BackendDesign;
