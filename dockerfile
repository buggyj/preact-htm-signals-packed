# Use an official Node.js runtime as a parent image
FROM node:18-alpine



# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Create the application directory
RUN mkdir /preactmk && chown -R appuser:appgroup /preactmk

# Set the working directory
WORKDIR /preactmk

# Copy the application source code to the container
COPY --chown=appuser:appgroup . .


# Create a directory for shared output and adjust permissions
RUN mkdir -p /preactmk/dist && chown -R appuser:appgroup /preactmk/dist

# Set the shared volume
VOLUME ["/preactmk/dist"]

# Install dependencies as the non-root user
USER appuser
RUN npm install 

# Set the default command to run the shell script
CMD ["npm", "run", "bundle"]

